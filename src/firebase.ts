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
import { getFirestore, doc, getDoc, setDoc, serverTimestamp } from "firebase/firestore"
import firebaseConfig from "./firebase.config"

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

export const signOutUser = () => signOut(getAuthInstance())
export const onAuthChanged = (callback: (user: any) => void) =>
  onAuthStateChanged(getAuthInstance(), callback)

const loadAdmins = async () => {
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
