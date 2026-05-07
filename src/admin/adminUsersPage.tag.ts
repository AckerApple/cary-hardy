import {
  a,
  br,
  button,
  callback,
  div,
  h3,
  input,
  label,
  noElement,
  onDestroy,
  output,
  p,
  select,
  small,
  style,
  tag,
  subscribeWith,
  ValueSubject,
} from 'taggedjs'
import { deleteUser, listenUsers$, signIn, signOutUser, upsertUserProfile } from '../firebase'
import { startAuthFlow } from '../auth-flow'
import { handleAdminAuthUser } from '../auth-handler'
import { SsoPanel } from '../sso.tag'
import type { AuthStatus } from '../auth.types'
import { adminNavButtons } from './adminNavButtons.tag'
import { topNavBar } from '../ui/topNav.tag'
import { userDisplay, type UserRecord } from './userDisplay.tag'
import { userEdit } from './userEdit.tag'

let authInitialized = false
let usersLoaded = false
let users$ = new ValueSubject<Array<{ id: string } & Record<string, any>> | null>(null)
let usersUnsubscribe: (() => void) | null = null

export const adminUsersPageTag = tag(() => {
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

      .users-page {
        max-width: 900px;
        margin: 0 auto;
        padding: 0 1em;
      }

      .users-card {
        background: #1f1f1f;
        border: 1px solid rgba(255, 255, 255, 0.2);
        border-radius: 0.8em;
        padding: 1em 1.2em;
        color: rgba(255, 255, 255, 0.9);
      }

      .users-actions {
        margin-top: 1em;
        display: flex;
        gap: 0.75em;
        flex-wrap: wrap;
      }

      .users-actions a {
        display: inline-block;
        padding: 0.6em 1em;
        border-radius: 999px;
        border: 1px solid rgba(255, 255, 255, 0.3);
        color: #fff;
        text-decoration: none;
        font-weight: 600;
      }
    `),
    _ => authOutput(authStatus, deniedEmail, onSignedOut)
  )
})

const authOutput = tag((
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
      ? adminUsersPage(onSignedOut)
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

export const adminUsersPage = tag((
  onSignedOut
) => {
  adminUsersPage.inputs(([_onSignedOut]) => {
    onSignedOut = output(_onSignedOut)
  })

  const signoutClick = () =>
    signOutUser()
      .then(onSignedOut)
      .catch((error) => {
        console.error('Failed to sign out', error)
      })

  let isLoading = false
  let isSaving = false
  let isDeleting = false
  let errorMessage = ''
  let editingId: string | null = null
  let editCreatedAt: any = null
  let editUser: UserRecord | null = null
  const refresh = callback(() => {})

  const formatCreatedAt = (value: any) => {
    if (!value) return '-'
    if (typeof value.toDate === 'function') {
      return value.toDate().toLocaleDateString()
    }
    if (typeof value === 'number') {
      return new Date(value).toLocaleDateString()
    }
    if (value.seconds) {
      return new Date(value.seconds * 1000).toLocaleDateString()
    }
    return '-'
  }

  const formatCreatedAtLong = (value: any) => {
    if (!value) return '-'
    let date: Date | null = null
    if (typeof value.toDate === 'function') {
      date = value.toDate()
    } else if (typeof value === 'number') {
      date = new Date(value)
    } else if (value.seconds) {
      date = new Date(value.seconds * 1000)
    }
    return date ? date.toLocaleString() : '-'
  }

  const startUsersListener = () => {
    if (usersUnsubscribe) {
      usersUnsubscribe()
      usersUnsubscribe = null
    }
    isLoading = true
    errorMessage = ''
    refresh()
    users$ = listenUsers$()
    usersUnsubscribe = (users$ as any)?.unsubscribe || null
  }

  const openEdit = (user: UserRecord) => {
    editingId = user.id
    editCreatedAt = user.createdAt ?? null
    editUser = { ...user }
    refresh()
  }

  const closeEdit = () => {
    editingId = null
    editCreatedAt = null
    editUser = null
    refresh()
  }

  const saveUser = () => {
    if (!editingId || isSaving) return
    isSaving = true
    errorMessage = ''
    refresh()
    const payload = {
      id: editingId,
      email: (editUser?.email || '').trim(),
      firstName: (editUser?.firstName || '').trim(),
      lastName: (editUser?.lastName || '').trim(),
      userType: editUser?.userType === 'verified' ? 'verified' : 'unverified',
    }
    tag.promise = upsertUserProfile(payload)
      .then(() => {
        closeEdit()
      })
      .catch((error) => {
        console.error('Failed to save user', error)
        errorMessage = 'Failed to save user.'
        refresh()
      })
      .finally(() => {
        isSaving = false
        refresh()
      })
  }

  const removeUser = () => {
    if (!editingId || isDeleting) return
    if (!confirm('Delete this user?')) return
    isDeleting = true
    errorMessage = ''
    refresh()
    tag.promise = deleteUser(editingId)
      .then(() => {
        closeEdit()
      })
      .catch((error) => {
        console.error('Failed to delete user', error)
        errorMessage = 'Failed to delete user.'
        refresh()
      })
      .finally(() => {
        isDeleting = false
        refresh()
      })
  }

  if (!usersLoaded) {
    usersLoaded = true
    if (!usersUnsubscribe) {
      startUsersListener()
    } else {
      isLoading = true
    }
  }

  onDestroy(() => {
    if (usersUnsubscribe) {
      usersUnsubscribe()
      usersUnsubscribe = null
    }
    usersLoaded = false
  })

  return noElement(
    topNavBar(() => adminNavButtons(signoutClick)),
    div.class`users-page`(
      h3('Users Admin'),
      div.class`users-card`(
        div.style`margin-top:0.75em;display:grid;gap:0.5em;`(
          _ => (errorMessage ? p.style`color:#f6c177;`(errorMessage) : ''),
                    
          subscribeWith(users$, null, (items) => {
            if(items === null) {
              return small.style`opacity:0.7;`('Loading users...')
            }

            isLoading = false
            console.log('user items', {items, isLoading})
            return items.length
              ? items.map((user) =>
                  userDisplay({
                    user: user as UserRecord,
                    onEdit: () => openEdit(user as UserRecord),
                    formatCreatedAt,
                  }).key(user.id)
                )
              : small.style`opacity:0.7;`('No users found.')
          })
        ),
        
        _ => editingId
          ? userEdit({
              userId: editingId,
              createdAtLabel: formatCreatedAtLong(editCreatedAt),
              editUser,
              isSaving,
              isDeleting,
              onChange: (nextUser) => {
                editUser = nextUser
                refresh()
              },
              onSave: saveUser,
              onDelete: removeUser,
              onCancel: closeEdit,
            })
          : '',
        br,
        div.class`users-actions`(
          a.href`../admin.html`('Back to Admin Tools')
        )
      )
    )
  )
})
