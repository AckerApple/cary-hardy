import { callback, div, noElement, output, style, tag } from 'taggedjs'
import { signIn, signOutUser } from '../firebase'
import { startAuthFlow } from '../auth-flow'
import { handleAdminAuthUser } from '../auth-handler'
import { SsoPanel } from '../sso.tag'
import type { AuthStatus } from '../auth.types'

export const adminCrudStyles = `
  .admin-pill-button {
    border: 1px solid rgba(255, 185, 62, 0.55);
    border-radius: 999px;
    background: linear-gradient(90deg, #b91c1c, #f97316, #facc15);
    color: #fff;
    font-weight: 800;
    padding: 0.6em 1em;
    text-decoration: none;
  }

  .admin-secondary-button {
    border: 1px solid rgba(255,255,255,0.28);
    border-radius: 999px;
    background: rgba(0,0,0,0.25);
    color: #fff;
    font-weight: 700;
    padding: 0.55em 0.9em;
  }

  .admin-danger-button {
    border: 1px solid rgba(248,113,113,0.5);
    border-radius: 999px;
    background: #4b1111;
    color: #fff;
    font-weight: 700;
    padding: 0.55em 0.9em;
  }

  .admin-crud-page {
    max-width: 1100px;
    margin: 0 auto;
    padding: 0 1em 2em;
    text-align: left;
  }

  .admin-crud-header {
    display: flex;
    gap: 1em;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  .admin-crud-card {
    background: #1f1f1f;
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 0.8em;
    padding: 1em;
    color: rgba(255, 255, 255, 0.92);
  }

  .admin-crud-list {
    display: grid;
    gap: 0.6em;
  }

  .admin-crud-row {
    width: 100%;
    border: 1px solid rgba(255, 255, 255, 0.14);
    background: rgba(0, 0, 0, 0.32);
    color: #fff;
    border-radius: 0.7em;
    padding: 0.65em;
    display: grid;
    grid-template-columns: 72px 1fr auto;
    gap: 0.8em;
    align-items: center;
    text-align: left;
  }

  .admin-crud-row:hover {
    border-color: rgba(255, 185, 62, 0.65);
    background: rgba(255, 185, 62, 0.08);
  }

  .admin-crud-thumb {
    width: 72px;
    height: 72px;
    border-radius: 0.6em;
    object-fit: cover;
    background: #111;
    border: 1px solid rgba(255, 255, 255, 0.14);
  }

  .admin-crud-thumb-placeholder {
    display: flex;
    align-items: center;
    justify-content: center;
    color: #f6c177;
    font-weight: 800;
    font-size: 1.45em;
  }

  .admin-crud-modal-backdrop {
    position: fixed;
    inset: 0;
    z-index: 500;
    background: rgba(0,0,0,0.72);
    display: flex;
    justify-content: center;
    align-items: flex-start;
    overflow: auto;
    padding: 1.2em;
  }

  .admin-crud-modal {
    width: min(760px, 100%);
    margin: 1em auto;
    background: #181818;
    border: 1px solid rgba(255, 185, 62, 0.35);
    border-radius: 0.8em;
    box-shadow: 0 22px 80px rgba(0,0,0,0.6);
    padding: 1em;
  }

  .admin-crud-form-grid {
    display: grid;
    grid-template-columns: 160px 1fr;
    gap: 0.65em 0.8em;
    align-items: center;
  }

  .admin-crud-form-grid input,
  .admin-crud-form-grid select,
  .admin-crud-form-grid textarea {
    width: 100%;
    border: 1px solid rgba(255,255,255,0.2);
    border-radius: 0.5em;
    background: #101010;
    color: #fff;
    padding: 0.55em;
  }

  .admin-crud-form-grid input[type="date"],
  .admin-crud-form-grid select {
    color-scheme: dark;
  }

  .admin-crud-form-grid input[type="date"]::-webkit-calendar-picker-indicator {
    filter: invert(1);
    opacity: 0.85;
  }

  .admin-crud-form-grid textarea {
    min-height: 120px;
    resize: vertical;
  }

  .admin-crud-modal-actions {
    margin-top: 1em;
    display: flex;
    gap: 0.7em;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  @media (max-width: 720px) {
    .admin-crud-row {
      grid-template-columns: 58px 1fr;
    }
    .admin-crud-row > small {
      grid-column: 2;
    }
    .admin-crud-thumb {
      width: 58px;
      height: 58px;
    }
    .admin-crud-form-grid {
      grid-template-columns: 1fr;
    }
  }
`

export const createAdminAuthTag = (
  authorizedPage: (onSignedOut: () => void) => any,
  pageStyles = ''
) => {
  let authInitialized = false

  return tag(() => {
    let authStatus: AuthStatus = 'loading'
    let deniedEmail = ''
    let currentUser: { email: string; photoURL?: string } | null = null

    const mountSso = callback((status: typeof authStatus, email = '', _reason = '') => {
      authStatus = status
      deniedEmail = email
    })

    const setCurrentUser = callback((user: { email: string; photoURL?: string } | null) => {
      currentUser = user
      if (!user) authStatus = 'login'
    })

    const onSignedOut = () => {
      mountSso('login', '', 'auth:logged-out')
      authStatus = 'login'
    }

    const onAuthorized = callback((user: any, _reason = '') => {
      authStatus = 'authorized'
      deniedEmail = user?.email || ''
    })

    if (!authInitialized) {
      authInitialized = true
      startAuthFlow({
        onUser: (user, reason) => {
          handleAdminAuthUser({
            user,
            mountSso,
            setCurrentUser,
            onSignedOut,
            onDenied: () => mountSso('denied', currentUser?.email || '', 'auth:denied'),
            onAuthorized,
            reason,
          })
        },
        toast: {
          error: (message) => console.warn(message),
        },
      })
    }

    return noElement(
      style(`${adminCrudStyles}\n${pageStyles}`),
      _ => authOutput(authStatus, deniedEmail, onSignedOut, authorizedPage)
    )
  })
}

const authOutput = tag((authStatus, deniedEmail, onSignedOut, authorizedPage) => {
  authOutput.inputs((x) => {
    ;[authStatus, deniedEmail, onSignedOut, authorizedPage] = x
    onSignedOut = output(onSignedOut)
  })

  return [() => authStatus === 'authorized'
    ? authorizedPage(onSignedOut)
    : div(
        SsoPanel({
          status: authStatus,
          userEmail: deniedEmail,
          adminEmail: '',
          onSignIn: () => signIn().catch((error) => console.error('Failed to sign in', error)),
          onSignOut: () => {
            authStatus = 'login'
            return signOutUser().catch((error) => console.error('Failed to sign out', error))
          },
        })
      )]
})
