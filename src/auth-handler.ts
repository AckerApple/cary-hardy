import { ensureAdminAccess } from "./admin-access"
import type { AuthStatus } from "./auth.types"

export const handleAdminAuthUser = async ({
  user,
  mountSso,
  toast,
  setCurrentUser,
  onSignedOut,
  onDenied,
  onAuthorized,
  reason = "",
}: {
  user?: any
  mountSso?: (status: AuthStatus, email?: string, reason?: string) => void
  toast?: { error?: (message: string) => void }
  setCurrentUser?: (user: { email: string; photoURL?: string } | null) => void
  onSignedOut?: () => void
  onDenied?: () => void
  onAuthorized?: (user: any, reason: string) => void
  reason?: string
} = {}) => {
  if (!user) {
    setCurrentUser?.(null)
    onSignedOut?.()
    mountSso?.("login", "", "auth:logged-out")
    return false
  }

  const isAllowed = await ensureAdminAccess({
    user,
    mountSso,
    toast,
    onDenied,
    onPermissionsError: onDenied,
  })
  if (!isAllowed) return false

  setCurrentUser?.(user)
  onAuthorized?.(user, reason)
  
  return true
}
