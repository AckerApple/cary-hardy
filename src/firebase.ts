import { initializeApp } from "firebase/app"
import {
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithRedirect,
  getRedirectResult,
  setPersistence,
  browserLocalPersistence,
  browserSessionPersistence,
  indexedDBLocalPersistence,
  signInWithPopup,
  signOut,
} from "firebase/auth"
import {
  addDoc,
  collection,
  doc,
  deleteDoc,
  getDoc,
  getDocs,
  getFirestore,
  onSnapshot,
  query,
  serverTimestamp,
  setDoc,
  where,
} from "firebase/firestore"
import { ValueSubject } from "taggedjs"
import firebaseConfig from "./firebase.config"
import type { NewOrderInput, UserProfileInput } from "./commerce.types"
import type { CurrentGameInput } from "./currentGames.types"
import type { GameRatingInput } from "./gameRatings.types"
import type { GameInput } from "./games.types"
import type { ManufacturerInput } from "./manufacturers.types"
import type { PastOwnedGameInput, PinsideHistoryGame } from "./pastOwnedGames.types"

let app: ReturnType<typeof initializeApp> | null = null
let auth: ReturnType<typeof getAuth> | null = null
let provider: GoogleAuthProvider | null = null
let db: ReturnType<typeof getFirestore> | null = null

const getApp = () => {
  if (!app) {
    app = initializeApp(firebaseConfig)
  }
  return app
}

const getAuthInstance = () => {
  if (!auth) {
    auth = getAuth(getApp())
  }
  return auth
}

const getProvider = () => {
  if (!provider) {
    provider = new GoogleAuthProvider()
  }
  return provider
}

const getDb = () => {
  if (!db) {
    db = getFirestore(getApp())
  }
  return db
}

const getAdminsDoc = () => doc(getDb(), "admins", "list")
const getMeetupDoc = () => doc(getDb(), "config", "site")
const getUserDoc = (userId: string) => doc(getDb(), "users", userId)
const getUsersCollection = () => collection(getDb(), "users")
const getOrdersCollection = () => collection(getDb(), "orders")
const getGamesCollection = () => collection(getDb(), "games")
const getGameDoc = (gameId: string) => doc(getDb(), "games", gameId)
const getManufacturersCollection = () => collection(getDb(), "manufacturers")
const getManufacturerDoc = (manufacturerId: string) => doc(getDb(), "manufacturers", manufacturerId)
const getGameRatingsCollection = () => collection(getDb(), "gameRatings")
const getGameRatingDoc = (gameId: string) => doc(getDb(), "gameRatings", gameId)
const getCurrentGamesCollection = () => collection(getDb(), "currentGames")
const getCurrentGameDoc = (gameId: string) => doc(getDb(), "currentGames", gameId)
const getPastOwnedGamesCollection = () => collection(getDb(), "pastOwnedGames")
const getPastOwnedGameDoc = (gameId: string) => doc(getDb(), "pastOwnedGames", gameId)

const normalizeEmail = (email = "") => email.trim().toLowerCase()

const isIOS = () =>
  typeof navigator !== "undefined" &&
  /iPad|iPhone|iPod/i.test(navigator.userAgent || "")

const setBestPersistence = async () => {
  const candidates = [
    { key: "indexedDB", value: indexedDBLocalPersistence },
    { key: "local", value: browserLocalPersistence },
    { key: "session", value: browserSessionPersistence },
  ]
  let lastError: unknown = null

  for (const candidate of candidates) {
    try {
      await setPersistence(getAuthInstance(), candidate.value)
      return { persistence: candidate.key, error: null }
    } catch (error) {
      lastError = error
      console.warn(`Failed to set ${candidate.key} persistence`, error)
    }
  }

  return { persistence: "none", error: lastError }
}

export const prepareAuth = async () => {
  let redirectError: unknown = null
  let redirectResult: any = null

  try {
    redirectResult = await getRedirectResult(getAuthInstance())
  } catch (error) {
    redirectError = error
    console.error("Firebase redirect sign-in failed", error)
  }

  const persistence = await setBestPersistence()

  return { redirectError, redirectResult, persistence }
}

export const signIn = async () => {
  try {
    return await signInWithPopup(getAuthInstance(), getProvider())
  } catch (error) {
    if (!isIOS()) {
      throw error
    }
    console.warn("Popup sign-in failed on iOS, falling back to redirect", error)
    return signInWithRedirect(getAuthInstance(), getProvider())
  }
}

export const signOutUser = () => {
  console.log('start signout')
  return signOut(getAuthInstance()).then(()=> {
    console.log('signout completed')
  })
}
export const onAuthChanged = (callback: (user: any) => void) =>
  onAuthStateChanged(getAuthInstance(), callback)

export const loadAdmins = async () => {
  const snapshot = await getDoc(getAdminsDoc())
  if (!snapshot.exists()) {
    return []
  }
  const data = snapshot.data()
  return Array.isArray(data.items) ? data.items : []
}

export const isAdminEmail = async (email = "") => {
  const list = await loadAdmins()
  return list.map(normalizeEmail).includes(normalizeEmail(email))
}

export const saveAdminEmails = async (items: string[]) =>
  setDoc(
    getAdminsDoc(),
    {
      items: items.map(normalizeEmail).filter(Boolean),
      updatedAt: serverTimestamp(),
    },
    { merge: true }
  )

export const loadNextMeetupDate = async () => {
  const snapshot = await getDoc(getMeetupDoc())
  if (!snapshot.exists()) {
    return null
  }
  const data = snapshot.data()
  return typeof data.nextMeetupDate === "number" ? data.nextMeetupDate : null
}

export const saveNextMeetupDate = async (nextMeetupDate: number) =>
  setDoc(
    getMeetupDoc(),
    {
      nextMeetupDate,
      updatedAt: serverTimestamp(),
    },
    { merge: true }
  )

export const upsertUserProfile = async (user: UserProfileInput) => {
  const userDoc = getUserDoc(user.id)
  const snapshot = await getDoc(userDoc)
  const payload = {
    email: user.email,
    firstName: user.firstName,
    lastName: user.lastName,
    ...(user.userType ? { userType: user.userType } : {}),
    updatedAt: serverTimestamp(),
  }

  if (!snapshot.exists()) {
    return setDoc(userDoc, { ...payload, createdAt: serverTimestamp() })
  }

  return setDoc(userDoc, payload, { merge: true })
}

export const ensureUserProfile = async (user: {
  uid?: string
  email?: string
  displayName?: string
}) => {
  const userId = user?.uid
  if (!userId) return false

  const userDoc = getUserDoc(userId)
  const snapshot = await getDoc(userDoc)
  if (snapshot.exists()) return true

  const email = (user.email || "").trim().toLowerCase()
  if (email) {
    const existingByEmail = await getDocs(
      query(getUsersCollection(), where("email", "==", email))
    )
    if (!existingByEmail.empty) {
      return true
    }
  }

  const displayName = user.displayName || ""
  const [firstName = "", ...rest] = displayName.trim().split(/\s+/)
  const lastName = rest.join(" ")

  await setDoc(userDoc, {
    email,
    firstName,
    lastName,
    userType: "unverified",
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  })

  return true
}

export const listUsers = async () => {
  const snapshot = await getDocs(getUsersCollection())
  return snapshot.docs.map((docSnapshot) => ({
    id: docSnapshot.id,
    ...docSnapshot.data(),
  } as { id: string } & Record<string, any>))
}

export const listenUsers$ = () => {
  const users$ = new ValueSubject<Array<{ id: string } & Record<string, any>>>([])
  const unsubscribe = onSnapshot(
    getUsersCollection(),
    (snapshot) => {
      const items = snapshot.docs.map((docSnapshot) => ({
        id: docSnapshot.id,
        ...docSnapshot.data(),
      } as { id: string } & Record<string, any>))
      items.sort((a, b) => {
        const aTime = a?.createdAt?.seconds
          ? a.createdAt.seconds * 1000
          : (a?.createdAt?.toDate?.() as Date | undefined)?.getTime?.() ?? 0
        const bTime = b?.createdAt?.seconds
          ? b.createdAt.seconds * 1000
          : (b?.createdAt?.toDate?.() as Date | undefined)?.getTime?.() ?? 0
        return bTime - aTime
      })
      users$.next(items)
    },
    (error) => {
      console.error("Failed to listen to users", error)
    }
  )

  ;(users$ as any).unsubscribe = unsubscribe
  return users$
}

export const deleteUser = async (userId: string) => {
  if (!userId) return false
  await deleteDoc(getUserDoc(userId))
  return true
}

export const createOrder = async (order: NewOrderInput) =>
  addDoc(getOrdersCollection(), {
    ...order,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  })

export const listenGames$ = () => {
  const games$ = new ValueSubject<Array<{ id: string } & Record<string, any>>>([])
  const unsubscribe = onSnapshot(
    getGamesCollection(),
    (snapshot) => {
      const items = snapshot.docs.map((docSnapshot) => ({
        id: docSnapshot.id,
        ...docSnapshot.data(),
      } as { id: string } & Record<string, any>))
      games$.next(sortGamesByTitle(items))
    },
    (error) => {
      console.error("Failed to listen to games", error)
    }
  )

  ;(games$ as any).unsubscribe = unsubscribe
  return games$
}

export const listenManufacturers$ = () => {
  const manufacturers$ = new ValueSubject<Array<{ id: string } & Record<string, any>>>([])
  const unsubscribe = onSnapshot(
    getManufacturersCollection(),
    (snapshot) => {
      const items = snapshot.docs.map((docSnapshot) => ({
        id: docSnapshot.id,
        ...docSnapshot.data(),
      } as { id: string } & Record<string, any>))
      manufacturers$.next(sortManufacturersByName(items))
    },
    (error) => {
      console.error("Failed to listen to manufacturers", error)
    }
  )

  ;(manufacturers$ as any).unsubscribe = unsubscribe
  return manufacturers$
}

export const listManufacturers = async () => {
  const snapshot = await getDocs(getManufacturersCollection())
  const items = snapshot.docs.map((docSnapshot) => ({
    id: docSnapshot.id,
    ...docSnapshot.data(),
  } as { id: string } & Record<string, any>))
  return sortManufacturersByName(items)
}

export const upsertManufacturer = async (manufacturer: ManufacturerInput) => {
  const payload = cleanManufacturerPayload(manufacturer)

  if (manufacturer.id) {
    return setDoc(
      getManufacturerDoc(manufacturer.id),
      {
        ...payload,
        updatedAt: serverTimestamp(),
      },
      { merge: true }
    )
  }

  return addDoc(getManufacturersCollection(), {
    ...payload,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  })
}

export const deleteManufacturer = async (manufacturerId: string) => {
  if (!manufacturerId) return false
  await deleteDoc(getManufacturerDoc(manufacturerId))
  return true
}

export const listGames = async () => {
  const snapshot = await getDocs(getGamesCollection())
  const items = snapshot.docs.map((docSnapshot) => ({
    id: docSnapshot.id,
    ...docSnapshot.data(),
  } as { id: string } & Record<string, any>))
  return sortGamesByTitle(items)
}

export const upsertGame = async (game: GameInput) => {
  const payload = cleanGamePayload(game)

  if (game.id) {
    return setDoc(
      getGameDoc(game.id),
      {
        ...payload,
        updatedAt: serverTimestamp(),
      },
      { merge: true }
    )
  }

  const gameId = await nextAvailableGameId(payload.title)
  await setDoc(getGameDoc(gameId), {
    ...payload,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  })
  return { id: gameId }
}

export const deleteGame = async (gameId: string) => {
  if (!gameId) return false
  await deleteDoc(getGameDoc(gameId))
  return true
}

export const listenGameRatings$ = () => {
  const ratings$ = new ValueSubject<Array<{ id: string } & Record<string, any>>>([])
  const unsubscribe = onSnapshot(
    getGameRatingsCollection(),
    (snapshot) => {
      const items = snapshot.docs.map((docSnapshot) => ({
        id: docSnapshot.id,
        ...docSnapshot.data(),
      } as { id: string } & Record<string, any>))
      ratings$.next(sortGameRatings(items))
    },
    (error) => {
      console.error("Failed to listen to game ratings", error)
    }
  )

  ;(ratings$ as any).unsubscribe = unsubscribe
  return ratings$
}

export const listenVisibleGameRatings$ = () => {
  const ratings$ = new ValueSubject<Array<{ id: string } & Record<string, any>>>([])
  const unsubscribe = onSnapshot(
    query(getGameRatingsCollection(), where("isVisible", "==", true)),
    (snapshot) => {
      const items = snapshot.docs.map((docSnapshot) => ({
        id: docSnapshot.id,
        ...docSnapshot.data(),
      } as { id: string } & Record<string, any>))
      ratings$.next(sortGameRatings(items))
    },
    (error) => {
      console.error("Failed to listen to visible game ratings", error)
    }
  )

  ;(ratings$ as any).unsubscribe = unsubscribe
  return ratings$
}

export const listGameRatings = async () => {
  const snapshot = await getDocs(getGameRatingsCollection())
  const items = snapshot.docs.map((docSnapshot) => ({
    id: docSnapshot.id,
    ...docSnapshot.data(),
  } as { id: string } & Record<string, any>))
  return sortGameRatings(items)
}

export const upsertGameRating = async (rating: GameRatingInput) => {
  const payload = cleanGameRatingPayload(rating)
  const ratingId = rating.id || rating.gameId

  if (!ratingId) {
    throw new Error("Game rating requires a gameId.")
  }

  const existingRating = await getDoc(getGameRatingDoc(ratingId))
  return setDoc(
    getGameRatingDoc(ratingId),
    {
      ...payload,
      updatedAt: serverTimestamp(),
      ...(existingRating.exists() ? {} : { createdAt: serverTimestamp() }),
    },
    { merge: true }
  )
}

export const deleteGameRating = async (gameId: string) => {
  if (!gameId) return false
  await deleteDoc(getGameRatingDoc(gameId))
  return true
}

export const listenCurrentGames$ = () => {
  const games$ = new ValueSubject<Array<{ id: string } & Record<string, any>>>([])
  const unsubscribe = onSnapshot(
    getCurrentGamesCollection(),
    (snapshot) => {
      const items = snapshot.docs.map((docSnapshot) => ({
        id: docSnapshot.id,
        ...docSnapshot.data(),
      } as { id: string } & Record<string, any>))
      games$.next(sortCurrentGames(items))
    },
    (error) => {
      console.error("Failed to listen to current games", error)
    }
  )

  ;(games$ as any).unsubscribe = unsubscribe
  return games$
}

export const listenVisibleCurrentGames$ = () => {
  const games$ = new ValueSubject<Array<{ id: string } & Record<string, any>>>([])
  const unsubscribe = onSnapshot(
    query(getCurrentGamesCollection(), where("isVisible", "==", true)),
    (snapshot) => {
      const items = snapshot.docs.map((docSnapshot) => ({
        id: docSnapshot.id,
        ...docSnapshot.data(),
      } as { id: string } & Record<string, any>))
      games$.next(sortCurrentGames(items))
    },
    (error) => {
      console.error("Failed to listen to visible current games", error)
    }
  )

  ;(games$ as any).unsubscribe = unsubscribe
  return games$
}

export const listCurrentGames = async () => {
  const snapshot = await getDocs(getCurrentGamesCollection())
  const items = snapshot.docs.map((docSnapshot) => ({
    id: docSnapshot.id,
    ...docSnapshot.data(),
  } as { id: string } & Record<string, any>))
  return sortCurrentGames(items)
}

export const upsertCurrentGame = async (game: CurrentGameInput) => {
  const payload = cleanCurrentGamePayload(game)

  if (game.id) {
    return setDoc(
      getCurrentGameDoc(game.id),
      {
        ...payload,
        updatedAt: serverTimestamp(),
      },
      { merge: true }
    )
  }

  return addDoc(getCurrentGamesCollection(), {
    ...payload,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  })
}

export const deleteCurrentGame = async (gameId: string) => {
  if (!gameId) return false
  await deleteDoc(getCurrentGameDoc(gameId))
  return true
}

export const listenPastOwnedGames$ = () => {
  const games$ = new ValueSubject<Array<{ id: string } & Record<string, any>>>([])
  const unsubscribe = onSnapshot(
    getPastOwnedGamesCollection(),
    (snapshot) => {
      const items = snapshot.docs.map((docSnapshot) => ({
        id: docSnapshot.id,
        ...docSnapshot.data(),
      } as { id: string } & Record<string, any>))
      games$.next(sortPastOwnedGames(items))
    },
    (error) => {
      console.error("Failed to listen to past owned games", error)
    }
  )

  ;(games$ as any).unsubscribe = unsubscribe
  return games$
}

export const listenVisiblePastOwnedGames$ = () => {
  const games$ = new ValueSubject<Array<{ id: string } & Record<string, any>>>([])
  const unsubscribe = onSnapshot(
    query(getPastOwnedGamesCollection(), where("isVisible", "==", true)),
    (snapshot) => {
      const items = snapshot.docs.map((docSnapshot) => ({
        id: docSnapshot.id,
        ...docSnapshot.data(),
      } as { id: string } & Record<string, any>))
      games$.next(sortPastOwnedGames(items))
    },
    (error) => {
      console.error("Failed to listen to visible past owned games", error)
    }
  )

  ;(games$ as any).unsubscribe = unsubscribe
  return games$
}

export const listPastOwnedGames = async () => {
  const snapshot = await getDocs(getPastOwnedGamesCollection())
  const items = snapshot.docs.map((docSnapshot) => ({
    id: docSnapshot.id,
    ...docSnapshot.data(),
  } as { id: string } & Record<string, any>))
  return sortPastOwnedGames(items)
}

export const upsertPastOwnedGame = async (game: PastOwnedGameInput) => {
  const payload = cleanPastOwnedGamePayload(game)

  if (game.id) {
    return setDoc(
      getPastOwnedGameDoc(game.id),
      {
        ...payload,
        updatedAt: serverTimestamp(),
      },
      { merge: true }
    )
  }

  return addDoc(getPastOwnedGamesCollection(), {
    ...payload,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  })
}

export const deletePastOwnedGame = async (gameId: string) => {
  if (!gameId) return false
  await deleteDoc(getPastOwnedGameDoc(gameId))
  return true
}

export const syncPastOwnedGamesFromPinside = async (
  pinsideGames: PinsideHistoryGame[],
  gameLibrary: Array<{ id: string } & Record<string, any>> = []
) => {
  const existing = await listPastOwnedGames()
  const existingKeys = new Set(existing.flatMap((game) => pastOwnedGameKeys(game)))
  const libraryByTitle = createGameTitleMap(gameLibrary)
  let added = 0
  let skipped = 0

  for (const pinsideGame of pinsideGames) {
    const title = (pinsideGame.title || "").trim()
    if (!title) {
      skipped += 1
      continue
    }

    const keys = pastOwnedGameKeys(pinsideGame)
    const exists = keys.some((key) => existingKeys.has(key))
    if (exists) {
      skipped += 1
      continue
    }

    const libraryGame = await ensureCanonicalGameForPastOwned({
      title,
      manufacturer: pinsideGame.manufacturer || "",
      yearReleased: pinsideGame.yearReleased ?? null,
      imageUrl: pinsideGame.imageUrl || "",
      notes: pinsideGame.pinsideUrl ? `Imported from ${pinsideGame.pinsideUrl}` : "",
    }, libraryByTitle)
    await upsertPastOwnedGame({
      gameId: libraryGame.id,
      title: "",
      imageUrl: "",
      manufacturer: "",
      yearReleased: null,
      dateAddedToCollection: pinsideGame.dateAddedToCollection || "",
      dateRemovedFromCollection: pinsideGame.dateRemovedFromCollection || "",
      notes: "",
      isVisible: true,
      pinsideUrl: pinsideGame.pinsideUrl || "",
      pinsideId: pinsideGame.pinsideId || "",
      sourceTitle: title,
      source: "pinside",
    })
    keys.forEach((key) => existingKeys.add(key))
    added += 1
  }

  return { added, skipped, total: pinsideGames.length }
}

const cleanCurrentGamePayload = (game: CurrentGameInput) => {
  const payload: Record<string, any> = {
    gameId: (game.gameId || "").trim(),
    dateAddedToCollection: game.dateAddedToCollection,
    notes: (game.notes || "").trim(),
    isVisible: game.isVisible !== false,
  }

  if (game.title) payload.title = game.title.trim()
  if (game.imageUrl) payload.imageUrl = game.imageUrl.trim()
  if (game.manufacturer) payload.manufacturer = game.manufacturer.trim()
  if (typeof game.yearReleased === "number" && !Number.isNaN(game.yearReleased)) {
    payload.yearReleased = game.yearReleased
  }

  return payload
}

const cleanPastOwnedGamePayload = (game: PastOwnedGameInput) => {
  const payload: Record<string, any> = {
    gameId: (game.gameId || "").trim(),
    title: (game.title || "").trim(),
    dateAddedToCollection: (game.dateAddedToCollection || "").trim(),
    dateRemovedFromCollection: (game.dateRemovedFromCollection || "").trim(),
    notes: (game.notes || "").trim(),
    isVisible: game.isVisible !== false,
    pinsideUrl: (game.pinsideUrl || "").trim(),
    pinsideId: (game.pinsideId || "").trim(),
    sourceTitle: (game.sourceTitle || "").trim(),
    source: (game.source || "").trim(),
  }

  if (game.imageUrl) payload.imageUrl = game.imageUrl.trim()
  if (game.manufacturer) payload.manufacturer = game.manufacturer.trim()
  if (typeof game.yearReleased === "number" && !Number.isNaN(game.yearReleased)) {
    payload.yearReleased = game.yearReleased
  } else {
    payload.yearReleased = null
  }

  return payload
}

const cleanGamePayload = (game: GameInput) => {
  const dataLinks = Array.isArray(game.dataLinks)
    ? game.dataLinks
        .map((link) => ({
          title: (link?.title || "").trim(),
          url: (link?.url || "").trim(),
        }))
        .filter((link) => link.title || link.url)
    : []

  const payload: Record<string, any> = {
    title: (game.title || "").trim(),
    manufacturerId: (game.manufacturerId || "").trim(),
    imageUrl: (game.imageUrl || "").trim(),
    manufacturer: (game.manufacturer || "").trim(),
    notes: (game.notes || "").trim(),
    dataLinks,
  }

  if (typeof game.yearReleased === "number" && !Number.isNaN(game.yearReleased)) {
    payload.yearReleased = game.yearReleased
  } else {
    payload.yearReleased = null
  }

  return payload
}

const cleanManufacturerPayload = (manufacturer: ManufacturerInput) => ({
  name: (manufacturer.name || "").trim(),
  logoUrl: (manufacturer.logoUrl || "").trim(),
  opinions: (manufacturer.opinions || "").trim(),
})

const cleanGameRatingPayload = (rating: GameRatingInput) => {
  const ratingValue = typeof rating.rating === "number" && !Number.isNaN(rating.rating)
    ? Math.max(0, Math.min(10, rating.rating))
    : null
  const videos = Array.isArray(rating.videos)
    ? rating.videos
        .map((video) => ({
          url: (video?.url || "").trim(),
          description: (video?.description || "").trim(),
        }))
        .filter((video) => video.url || video.description)
    : []

  return {
    gameId: (rating.gameId || "").trim(),
    rating: ratingValue,
    review: (rating.review || "").trim(),
    videos,
    isVisible: rating.isVisible !== false,
  }
}

const currentGameDateTime = (value: any) => {
  if (!value) return 0
  if (typeof value.toDate === "function") return value.toDate().getTime()
  if (typeof value === "number") return value
  if (value.seconds) return value.seconds * 1000
  const parsed = new Date(value).getTime()
  return Number.isNaN(parsed) ? 0 : parsed
}

const sortCurrentGames = <T extends Record<string, any>>(items: T[]) =>
  [...items].sort((a, b) =>
    currentGameDateTime(b.dateAddedToCollection) - currentGameDateTime(a.dateAddedToCollection)
  )

const sortPastOwnedGames = <T extends Record<string, any>>(items: T[]) =>
  [...items].sort((a, b) => {
    const dateSort =
      currentGameDateTime(b.dateRemovedFromCollection || b.dateAddedToCollection) -
      currentGameDateTime(a.dateRemovedFromCollection || a.dateAddedToCollection)
    return dateSort || String(a.title || "").localeCompare(String(b.title || ""), undefined, { sensitivity: "base" })
  })

const sortGamesByTitle = <T extends Record<string, any>>(items: T[]) =>
  [...items].sort((a, b) =>
    String(a.title || "").localeCompare(String(b.title || ""), undefined, { sensitivity: "base" })
  )

const sortManufacturersByName = <T extends Record<string, any>>(items: T[]) =>
  [...items].sort((a, b) =>
    String(a.name || "").localeCompare(String(b.name || ""), undefined, { sensitivity: "base" })
  )

const sortGameRatings = <T extends Record<string, any>>(items: T[]) =>
  [...items].sort((a, b) => {
    const ratingSort = Number(b.rating || 0) - Number(a.rating || 0)
    return ratingSort || String(a.gameId || "").localeCompare(String(b.gameId || ""), undefined, { sensitivity: "base" })
  })

const normalizeGameTitle = (value: any) =>
  String(value || "")
    .toLowerCase()
    .replace(/\([^)]*\)/g, "")
    .replace(/[^a-z0-9]+/g, " ")
    .trim()

const gameTitleSlug = (value: any) =>
  String(value || "")
    .trim()
    .toLowerCase()
    .replace(/['’]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "") || "game"

const nextAvailableGameId = async (title: string) => {
  const baseId = gameTitleSlug(title)
  let nextId = baseId
  let suffix = 2

  while ((await getDoc(getGameDoc(nextId))).exists()) {
    nextId = `${baseId}-${suffix}`
    suffix += 1
  }

  return nextId
}

const createGameTitleMap = (games: Array<{ id: string } & Record<string, any>>) =>
  new Map(
    games
      .map((game) => [normalizeGameTitle(game.title), game] as const)
      .filter(([title]) => title)
  )

const ensureCanonicalGameForPastOwned = async (
  game: {
    title: string
    manufacturer?: string
    yearReleased?: number | null
    imageUrl?: string
    notes?: string
  },
  libraryByTitle: Map<string, { id: string } & Record<string, any>>
) => {
  const key = normalizeGameTitle(game.title)
  const existingGame = libraryByTitle.get(key)
  if (existingGame) return existingGame

  const newGameRef = await upsertGame({
    title: game.title,
    manufacturer: game.manufacturer || "",
    yearReleased: game.yearReleased ?? null,
    imageUrl: game.imageUrl || "",
    notes: game.notes || "",
  })
  const createdGame = {
    id: (newGameRef as any).id,
    title: game.title,
    manufacturer: game.manufacturer || "",
    yearReleased: game.yearReleased ?? null,
    imageUrl: game.imageUrl || "",
    notes: game.notes || "",
  }
  libraryByTitle.set(key, createdGame)
  return createdGame
}

const pastOwnedGameKeys = (game: Partial<PastOwnedGameInput | PinsideHistoryGame>) => {
  const title = normalizeGameTitle(game.title || game.sourceTitle)
  const hasSourceKey = Boolean(game.pinsideUrl || game.pinsideId)
  const hasDateKey = Boolean(game.dateAddedToCollection || game.dateRemovedFromCollection)
  const dateKey = [
    title,
    String(game.dateAddedToCollection || "").trim(),
    String(game.dateRemovedFromCollection || "").trim(),
  ].filter(Boolean).join("|")
  const keys = [
    game.pinsideUrl ? `url:${String(game.pinsideUrl).trim().toLowerCase()}` : "",
    game.pinsideId ? `pinside:${String(game.pinsideId).trim().toLowerCase()}` : "",
    hasDateKey && dateKey ? `history:${dateKey}` : "",
    !hasSourceKey && !hasDateKey && title ? `title:${title}` : "",
  ]
  return keys.filter(Boolean)
}
