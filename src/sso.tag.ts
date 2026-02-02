import { tag, section, div, h2, p, button, output, onDestroy } from "taggedjs"
import type { AuthStatus } from "./auth.types"

export const SsoPanel = tag(({
  status,
  userEmail,
  adminEmail,
  onSignIn,
  onSignOut,
}: {
  status: AuthStatus
  userEmail: string
  adminEmail?: string
  onSignIn: () => void
  onSignOut: () => void
}) => {
  SsoPanel.inputs((args) => {
    ;[{ status, userEmail, adminEmail, onSignIn, onSignOut }] = args
    onSignIn = output(onSignIn)
    onSignOut = output(onSignOut)
  })

  return [() => {
      if (status === "loading") {
        return section.class`panel auth-panel`(p("Checking login..."))
      }
  
      if (status === "denied") {
        return section.class`panel auth-panel`(
          h2("Access denied"),
          p.class`auth-warning`(
            () => userEmail || "This account",
            " is not authorized."
          ),
          p("Please be patient as we review your account to become verified status."),
          div.class`auth-actions`(
            button(
              {
                type: "button",
                class: "add-button",
                onClick: onSignOut,
              },
              "Sign out"
            )
          )
        )
      }
  
      return section.class`panel auth-panel`(
        h2("Sign in"),
        p("Use Google to access admin tools."),
        div.class`auth-actions`(
          button(
            {
              type: "button",
              class: "add-button",
              onClick: onSignIn,
            },
            "Sign in with Google"
          )
        )
      )
  }]
})
