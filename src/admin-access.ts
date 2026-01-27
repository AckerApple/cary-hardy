import { isAdminEmail } from "./firebase"
import type { AuthStatus } from "./auth.types"

export const ensureAdminAccess = async ({
  user,
  mountSso,
  toast,
  onDenied,
  onPermissionsError,
}: {
  user?: any
  mountSso?: (status: AuthStatus, email?: string, reason?: string) => void
  toast?: { error?: (message: string) => void }
  onDenied?: () => void
  onPermissionsError?: (error: unknown) => void
} = {}) => {
  let isAllowed = false
  try {
    isAllowed = await isAdminEmail(user?.email || "")
  } catch (error) {
    console.error("Failed to load admin list", error)
    onPermissionsError?.(error)
    toast?.error?.("Unable to verify access. Check Firestore rules.")
    mountSso?.("denied", user?.email || "", "auth:permissions")
    return false
  }

  if (!isAllowed) {
    onDenied?.()
    toast?.error?.(
      `Signed in as ${user?.email || "unknown"} but not authorized.`
    )
    mountSso?.("denied", user?.email || "", "auth:denied")
    return false
  }

  return true
}
