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
const getCurrentGamesCollection = () => collection(getDb(), "currentGames")
const getCurrentGameDoc = (gameId: string) => doc(getDb(), "currentGames", gameId)

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
  }))
}

export const listenUsers$ = () => {
  const users$ = new ValueSubject<Array<{ id: string } & Record<string, any>>>([])
  const unsubscribe = onSnapshot(
    getUsersCollection(),
    (snapshot) => {
      const items = snapshot.docs.map((docSnapshot) => ({
        id: docSnapshot.id,
        ...docSnapshot.data(),
      }))
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

export const listenCurrentGames$ = () => {
  const games$ = new ValueSubject<Array<{ id: string } & Record<string, any>>>([])
  const unsubscribe = onSnapshot(
    getCurrentGamesCollection(),
    (snapshot) => {
      const items = snapshot.docs.map((docSnapshot) => ({
        id: docSnapshot.id,
        ...docSnapshot.data(),
      }))
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
      }))
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
  }))
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

const cleanCurrentGamePayload = (game: CurrentGameInput) => {
  const payload: Record<string, any> = {
    title: (game.title || "").trim(),
    dateAddedToCollection: game.dateAddedToCollection,
    imageUrl: (game.imageUrl || "").trim(),
    manufacturer: (game.manufacturer || "").trim(),
    notes: (game.notes || "").trim(),
    isVisible: game.isVisible !== false,
  }

  if (typeof game.yearReleased === "number" && !Number.isNaN(game.yearReleased)) {
    payload.yearReleased = game.yearReleased
  } else {
    payload.yearReleased = null
  }

  return payload
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
