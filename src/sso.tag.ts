import { tag, section, div, h2, p, button } from "taggedjs"
import type { AuthStatus } from "./auth.types"

export const SsoPanel = tag(
  (
    status: AuthStatus,
    userEmail: string,
    _adminEmail: string,
    onSignIn: () => void,
    onSignOut: () => void
  ) => {
    SsoPanel.updates((args) => {
      ;[status, userEmail, _adminEmail, onSignIn, onSignOut] = args
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
  }
)
