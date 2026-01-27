import { prepareAuth, onAuthChanged } from "./firebase"

export const startAuthFlow = ({
  onUser,
  toast,
}: {
  onUser: (user: any, reason: string) => void
  toast?: { error?: (message: string) => void }
}) => {
  if (typeof onUser !== "function") {
    throw new Error("startAuthFlow requires an onUser callback.")
  }

  prepareAuth()
    .then(({ redirectError, redirectResult, persistence }) => {
      if (redirectError) {
        toast?.error?.("Sign-in failed after redirect. Try again.")
      }
      if (persistence?.error) {
        toast?.error?.("Safari blocked login storage. Check cookie settings.")
      }
      if (redirectResult?.user) {
        onUser(redirectResult.user, "redirectResult")
      }
    })
    .catch((error) => {
      console.error("Failed to prepare auth", error)
      toast?.error?.("Sign-in setup failed. Try again.")
    })

  onAuthChanged((user) => {
    onUser(user, "onAuthChanged")
  })
}
