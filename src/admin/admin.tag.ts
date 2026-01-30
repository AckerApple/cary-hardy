import {
  callback,
  div,
  noElement,
  output,
  style,
  tag,
} from 'taggedjs'
import { signIn, signOutUser } from '../firebase'
import { startAuthFlow } from '../auth-flow'
import { handleAdminAuthUser } from '../auth-handler'
import { SsoPanel } from '../sso.tag'
import type { AuthStatus } from '../auth.types'
import { adminTools } from './adminTools.tag'

let authInitialized = false
export const adminTag = tag(() => {
  let authStatus: AuthStatus = 'loading'
  let deniedEmail = ''
  let currentUser: { email: string; photoURL?: string } | null = null

  const mountSso = callback((
    status: typeof authStatus,
    email = '', 
    _reason = ''
  ) => {
    authStatus = status
    deniedEmail = email
  })

  const setCurrentUser = callback((user: { email: string; photoURL?: string } | null) => {
    currentUser = user
    console.log('currentUser', currentUser)
    if (!user) {
      authStatus = 'login'
    }
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
          onDenied: () => {
            mountSso('denied', currentUser?.email || '', 'auth:denied')
          },
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
    style(`
      .auth-panel {
        border: 1px solid rgba(255, 255, 255, 0.2);
        border-radius: 10px;
        padding: 1.5em;
        background: rgba(0, 0, 0, 0.6);
        max-width: 520px;
        margin: 0 auto 2em auto;
      }

      .auth-actions {
        margin-top: 1em;
        display: flex;
        gap: 0.75em;
      }

      .auth-warning {
        color: #f6c177;
      }
    `),
    _ => authOutput(authStatus, deniedEmail, onSignedOut)
  )
})

export const authOutput = tag((
  authStatus,
  deniedEmail,
  onSignedOut,
) => {
  authOutput.inputs((x) => {
    ;[authStatus, deniedEmail, onSignedOut] = x
    onSignedOut = output(onSignedOut)
  })

  return [() => {
    return authStatus === 'authorized'
      ? adminTools(onSignedOut)
      : div(
          SsoPanel({
            status: authStatus,
            userEmail: deniedEmail,
            adminEmail: '',
            onSignIn: () => signIn().catch((error) => {
              console.error('Failed to sign in', error)
            }),
            onSignOut: () => {
              authStatus = 'login'
              return signOutUser()
              .catch((error) => {
                console.error('Failed to sign out', error)
              })
            }
          })
        )
  }]
})

export { inviteMaker } from './meetingTools.tag'
export { timestampToValues } from './utils'
export { adminTools } from './adminTools.tag'
