import {
  a,
  button,
  callback,
  div,
  h3,
  img,
  input,
  label,
  noElement,
  onDestroy,
  output,
  p,
  small,
  span,
  strong,
  style,
  tag,
  textarea,
} from 'taggedjs'
import {
  deleteCurrentGame,
  listCurrentGames,
  listenCurrentGames$,
  signIn,
  signOutUser,
  upsertCurrentGame,
} from '../firebase'
import { startAuthFlow } from '../auth-flow'
import { handleAdminAuthUser } from '../auth-handler'
import { SsoPanel } from '../sso.tag'
import type { AuthStatus } from '../auth.types'
import { adminNavButtons } from './adminNavButtons.tag'
import { topNavBar } from '../ui/topNav.tag'
import type { CurrentGame, CurrentGameInput } from '../currentGames.types'

const emptyGame = (): CurrentGameInput => ({
  title: '',
  dateAddedToCollection: '',
  imageUrl: '',
  manufacturer: '',
  yearReleased: null,
  notes: '',
  isVisible: true,
})

let authInitialized = false
let gamesLoaded = false
let latestGames: Array<{ id: string } & Record<string, any>> | null = null
let gamesUnsubscribe: (() => void) | null = null
let gamesValueUnsubscribe: (() => void) | null = null

export const currentGamesAdminPageTag = tag(() => {
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

      .games-admin-page {
        max-width: 1100px;
        margin: 0 auto;
        padding: 0 1em 2em;
        text-align: left;
      }

      .games-admin-header {
        display: flex;
        gap: 1em;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;
      }

      .games-admin-card {
        background: #1f1f1f;
        border: 1px solid rgba(255, 255, 255, 0.2);
        border-radius: 0.8em;
        padding: 1em;
        color: rgba(255, 255, 255, 0.92);
      }

      .games-admin-list {
        display: grid;
        gap: 0.6em;
      }

      .games-admin-row {
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

      .games-admin-row:hover {
        border-color: rgba(255, 185, 62, 0.65);
        background: rgba(255, 185, 62, 0.08);
      }

      .game-thumb {
        width: 72px;
        height: 72px;
        border-radius: 0.6em;
        object-fit: cover;
        background: #111;
        border: 1px solid rgba(255, 255, 255, 0.14);
      }

      .game-thumb-placeholder {
        display: flex;
        align-items: center;
        justify-content: center;
        color: #f6c177;
        font-weight: 800;
        font-size: 1.45em;
      }

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

      .games-modal-backdrop {
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

      .games-modal {
        width: min(760px, 100%);
        margin: 1em auto;
        background: #181818;
        border: 1px solid rgba(255, 185, 62, 0.35);
        border-radius: 0.8em;
        box-shadow: 0 22px 80px rgba(0,0,0,0.6);
        padding: 1em;
      }

      .games-form-grid {
        display: grid;
        grid-template-columns: 180px 1fr;
        gap: 0.65em 0.8em;
        align-items: center;
      }

      .games-form-grid input,
      .games-form-grid textarea {
        width: 100%;
        border: 1px solid rgba(255,255,255,0.2);
        border-radius: 0.5em;
        background: #101010;
        color: #fff;
        padding: 0.55em;
      }

      .games-form-grid input[type="date"] {
        color-scheme: dark;
      }

      .games-form-grid input[type="date"]::-webkit-calendar-picker-indicator {
        filter: invert(1);
        opacity: 0.85;
      }

      .games-form-grid textarea {
        min-height: 110px;
        resize: vertical;
      }

      .games-modal-actions {
        margin-top: 1em;
        display: flex;
        gap: 0.7em;
        justify-content: space-between;
        flex-wrap: wrap;
      }

      @media (max-width: 720px) {
        .games-admin-row {
          grid-template-columns: 58px 1fr;
        }
        .games-admin-row > small {
          grid-column: 2;
        }
        .game-thumb {
          width: 58px;
          height: 58px;
        }
        .games-form-grid {
          grid-template-columns: 1fr;
        }
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
      ? currentGamesAdminPage(onSignedOut)
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

export const currentGamesAdminPage = tag((onSignedOut) => {
  currentGamesAdminPage.inputs(([_onSignedOut]) => {
    onSignedOut = output(_onSignedOut)
  })

  const signoutClick = () =>
    signOutUser()
      .then(onSignedOut)
      .catch((error) => {
        console.error('Failed to sign out', error)
      })

  let isSaving = false
  let isDeleting = false
  let errorMessage = ''
  let fieldErrors: Record<string, string> = {}
  let modalOpen = false
  let editingId: string | null = null
  let editGame: CurrentGameInput = emptyGame()
  let currentGames = latestGames
  const refresh = callback(() => {})

  const startGamesListener = () => {
    if (gamesUnsubscribe) {
      gamesUnsubscribe()
      gamesUnsubscribe = null
    }
    if (gamesValueUnsubscribe) {
      gamesValueUnsubscribe()
      gamesValueUnsubscribe = null
    }
    currentGames = null
    latestGames = null
    errorMessage = ''
    refresh()

    const liveGames$ = listenCurrentGames$()
    gamesUnsubscribe = (liveGames$ as any)?.unsubscribe || null
    const valueSubscription = liveGames$.subscribe((items) => {
      currentGames = items
      latestGames = items
      console.debug('Current games list updated', {
        count: items?.length || 0,
        items,
      })
      refresh()
    })
    gamesValueUnsubscribe = () => valueSubscription.unsubscribe()
  }

  const refreshGamesList = () =>
    listCurrentGames()
      .then((items) => {
        console.debug('Current games list refreshed', {
          count: items.length,
          items,
        })
        currentGames = items
        latestGames = items
        refresh()
      })
      .catch((error) => {
        console.error('Failed to refresh current games list', error)
        errorMessage = 'Saved, but failed to refresh the game list. Reload the page to confirm.'
        refresh()
      })

  const openAdd = () => {
    editingId = null
    editGame = emptyGame()
    errorMessage = ''
    fieldErrors = {}
    modalOpen = true
    refresh()
  }

  const openEdit = (game: CurrentGame) => {
    editingId = game.id
    editGame = {
      id: game.id,
      title: game.title || '',
      dateAddedToCollection: dateInputValue(game.dateAddedToCollection),
      imageUrl: game.imageUrl || '',
      manufacturer: game.manufacturer || '',
      yearReleased: numberOrNull(game.yearReleased),
      notes: game.notes || '',
      isVisible: game.isVisible !== false,
    }
    errorMessage = ''
    fieldErrors = {}
    modalOpen = true
    refresh()
  }

  const closeModal = () => {
    if (isSaving || isDeleting) return
    editingId = null
    editGame = emptyGame()
    errorMessage = ''
    fieldErrors = {}
    modalOpen = false
    refresh()
  }

  const validateGame = () => {
    const nextFieldErrors: Record<string, string> = {}

    if (!editGame.title.trim()) {
      nextFieldErrors.title = 'Game Title is required.'
    }

    if (!editGame.dateAddedToCollection) {
      nextFieldErrors.dateAddedToCollection = 'Date Added to Collection is required.'
    }

    if (editGame.yearReleased !== null && Number.isNaN(Number(editGame.yearReleased))) {
      nextFieldErrors.yearReleased = 'Year Released must be numeric.'
    }

    fieldErrors = nextFieldErrors
    const messages = Object.values(nextFieldErrors)
    return messages.length ? messages[0] : ''
  }

  const saveGame = () => {
    if (isSaving) {
      console.debug('Current game save ignored because a save is already running')
      return
    }
    const validationError = validateGame()
    if (validationError) {
      errorMessage = validationError
      console.warn('Current game save blocked by validation', {
        fieldErrors,
        game: editGame,
      })
      refresh()
      return
    }

    isSaving = true
    errorMessage = ''
    fieldErrors = {}
    refresh()
    console.debug('Saving current game', {
      id: editingId || null,
      game: editGame,
    })
    tag.promise = upsertCurrentGame({
      ...editGame,
      id: editingId || undefined,
      title: editGame.title.trim(),
      imageUrl: (editGame.imageUrl || '').trim(),
      manufacturer: (editGame.manufacturer || '').trim(),
      notes: (editGame.notes || '').trim(),
      yearReleased: numberOrNull(editGame.yearReleased),
      isVisible: editGame.isVisible !== false,
    })
      .then(() => {
        console.debug('Current game saved', {
          id: editingId || null,
        })
        isSaving = false
        closeModal()
        return refreshGamesList()
      })
      .catch((error) => {
        console.error('Failed to save current game', error)
        errorMessage = 'Failed to save game. Check the fields and try again.'
        refresh()
      })
      .finally(() => {
        isSaving = false
        refresh()
      })
  }

  const removeGame = () => {
    if (!editingId || isDeleting) return
    if (!confirm('Delete this game from the current lineup?')) return
    isDeleting = true
    errorMessage = ''
    refresh()
    tag.promise = deleteCurrentGame(editingId)
      .then(() => {
        isDeleting = false
        closeModal()
        return refreshGamesList()
      })
      .catch((error) => {
        console.error('Failed to delete current game', error)
        errorMessage = 'Failed to delete game.'
        refresh()
      })
      .finally(() => {
        isDeleting = false
        refresh()
      })
  }

  if (!gamesLoaded) {
    gamesLoaded = true
    if (!gamesUnsubscribe) {
      startGamesListener()
    }
  }

  onDestroy(() => {
    if (gamesUnsubscribe) {
      gamesUnsubscribe()
      gamesUnsubscribe = null
    }
    if (gamesValueUnsubscribe) {
      gamesValueUnsubscribe()
      gamesValueUnsubscribe = null
    }
    gamesLoaded = false
    latestGames = null
  })

  return noElement(
    topNavBar(() => adminNavButtons(signoutClick)),
    div.class`games-admin-page`(
      div.class`games-admin-header`(
        h3('Current Game Lineup'),
        button.type`button`.class`admin-pill-button`.onClick(openAdd)('Add Game')
      ),
      div.class`games-admin-card`(
        p.style`margin-top:0;opacity:0.78;`('Manage the Firestore currentGames collection used by the public lineup page.'),
        _ => errorMessage && !modalOpen ? p.style`color:#f6c177;`(errorMessage) : '',
        div.class`games-admin-list`(
          _ => {
            if (currentGames === null) {
              return small.style`opacity:0.7;`('Loading games...')
            }

            return currentGames.length
              ? currentGames.map((game) => gameAdminRow({
                  game: game as CurrentGame,
                  onClick: () => openEdit(game as CurrentGame),
                }).key(game.id))
              : small.style`opacity:0.7;`('No games found. Use Add Game to create the first one.')
          }
        ),
        div.style`margin-top:1em;display:flex;gap:0.75em;flex-wrap:wrap;`(
          a.href`../admin.html`.class`admin-secondary-button`('Back to Admin Tools'),
          a.href`../lineup.html`.class`admin-secondary-button`('View Public Lineup')
        )
      ),
      _ => modalOpen
        ? currentGameModal({
            isEditing: Boolean(editingId),
            editGame,
            errorMessage,
            fieldErrors,
            isSaving,
            isDeleting,
            onChange: (nextGame) => {
              editGame = nextGame
              fieldErrors = {
                ...fieldErrors,
                title: nextGame.title?.trim() ? '' : fieldErrors.title,
                dateAddedToCollection: nextGame.dateAddedToCollection ? '' : fieldErrors.dateAddedToCollection,
                yearReleased: nextGame.yearReleased === null || !Number.isNaN(Number(nextGame.yearReleased)) ? '' : fieldErrors.yearReleased,
              }
              refresh()
            },
            onSave: saveGame,
            onDelete: removeGame,
            onCancel: closeModal,
          })
        : ''
    )
  )
})

const gameAdminRow = tag(({
  game,
  onClick,
}: {
  game: CurrentGame
  onClick: () => void
}) => {
  gameAdminRow.inputs((args) => {
    ;[{ game, onClick }] = args
    onClick = output(onClick)
  })

  return button.type`button`.class`games-admin-row`.onClick(onClick)(
    game.imageUrl
      ? img.class`game-thumb`.src`${game.imageUrl}`.attr('alt', game.title || 'Game image')
      : div.class`game-thumb game-thumb-placeholder`('PB'),
    div(
      strong(game.title || 'Untitled game'),
      div.style`margin-top:0.15em;opacity:0.74;`(
        small([
          game.manufacturer || '',
          game.yearReleased ? String(game.yearReleased) : '',
        ].filter(Boolean).join(' · ') || 'No manufacturer/year')
      )
    ),
    small.style`opacity:0.62;text-align:right;display:grid;gap:0.1em;`(
      span.style`font-size:0.78em;text-transform:uppercase;`('Collected Date'),
      span(
        formatDate(game.dateAddedToCollection),
        game.isVisible === false ? ' · Hidden' : ''
      )
    )
  )
})

const currentGameModal = tag(({
  isEditing,
  editGame,
  errorMessage,
  fieldErrors,
  isSaving,
  isDeleting,
  onChange,
  onSave,
  onDelete,
  onCancel,
}: {
  isEditing: boolean
  editGame: CurrentGameInput
  errorMessage: string
  fieldErrors: Record<string, string>
  isSaving: boolean
  isDeleting: boolean
  onChange: (nextGame: CurrentGameInput) => void
  onSave: () => void
  onDelete: () => void
  onCancel: () => void
}) => {
  currentGameModal.inputs((args) => {
    ;[{
      isEditing,
      editGame,
      errorMessage,
      fieldErrors,
      isSaving,
      isDeleting,
      onChange,
      onSave,
      onDelete,
      onCancel,
    }] = args
    onChange = output(onChange)
    onSave = output(onSave)
    onDelete = output(onDelete)
    onCancel = output(onCancel)
  })

  const updateGame = (patch: Partial<CurrentGameInput>) => {
    onChange({ ...editGame, ...patch })
  }

  const invalidBorder = (fieldName: string) =>
    fieldErrors[fieldName] ? '#f87171' : 'rgba(255,255,255,0.2)'

  const labelColor = (fieldName: string) =>
    fieldErrors[fieldName] ? '#fca5a5' : 'inherit'

  return div.class`games-modal-backdrop`(
    div.class`games-modal`(
      div.style`display:flex;justify-content:space-between;gap:1em;align-items:flex-start;`(
        div(
          h3.style`margin:0;`(isEditing ? 'Edit Game' : 'Add Game'),
          small.style`opacity:0.72;`(isEditing ? 'Update this current lineup entry.' : 'Create a new current lineup entry.')
        ),
        button.type`button`.class`admin-secondary-button`.onClick(onCancel)('Cancel')
      ),
      _ => errorMessage ? p.style`color:#f6c177;`(errorMessage) : '',
      _ => Object.values(fieldErrors).filter(Boolean).length
        ? div.style`border:1px solid rgba(248,113,113,0.5);background:rgba(127,29,29,0.25);border-radius:0.55em;padding:0.6em;margin-top:0.75em;color:#fecaca;display:grid;gap:0.2em;`(
            Object.values(fieldErrors).filter(Boolean).map((message) => small(message))
          )
        : '',
      div.class`games-form-grid`.style`margin-top:1em;`(
        label.attr('style.color', _ => labelColor('title'))('Game Title'),
        input.type`text`.value(_ => editGame.title || '').onInput((event: any) => {
          updateGame({ title: event?.target?.value || '' })
        }).attr('aria-invalid', _ => fieldErrors.title ? 'true' : 'false').attr('title', _ => fieldErrors.title || '').attr('style.borderColor', _ => invalidBorder('title'))(),

        label.attr('style.color', _ => labelColor('dateAddedToCollection'))('Date Added to Collection'),
        input.type`date`.value(_ => editGame.dateAddedToCollection || '').onInput((event: any) => {
          updateGame({ dateAddedToCollection: event?.target?.value || '' })
        }).attr('aria-invalid', _ => fieldErrors.dateAddedToCollection ? 'true' : 'false').attr('title', _ => fieldErrors.dateAddedToCollection || '').attr('style.borderColor', _ => invalidBorder('dateAddedToCollection'))(),

        label('Game Image URL'),
        input.type`url`.value(_ => editGame.imageUrl || '').onInput((event: any) => {
          updateGame({ imageUrl: event?.target?.value || '' })
        })(),

        label('Manufacturer'),
        input.type`text`.value(_ => editGame.manufacturer || '').onInput((event: any) => {
          updateGame({ manufacturer: event?.target?.value || '' })
        })(),

        label.attr('style.color', _ => labelColor('yearReleased'))('Year Released'),
        input.type`number`.value(_ => editGame.yearReleased ?? '').onInput((event: any) => {
          updateGame({ yearReleased: optionalNumber(event?.target?.value) })
        }).attr('aria-invalid', _ => fieldErrors.yearReleased ? 'true' : 'false').attr('title', _ => fieldErrors.yearReleased || '').attr('style.borderColor', _ => invalidBorder('yearReleased'))(),

        label('Notes'),
        textarea.value(_ => editGame.notes || '').onInput((event: any) => {
          updateGame({ notes: event?.target?.value || '' })
        })(),

        label('Visible on public page'),
        label.style`display:flex;gap:0.5em;align-items:center;`(
          input.type`checkbox`.attr('checked', _ => editGame.isVisible !== false ? 'checked' : null).onChange((event: any) => {
            updateGame({ isVisible: Boolean(event?.target?.checked) })
          })(),
          span(editGame.isVisible !== false ? 'Visible' : 'Hidden')
        )
      ),
      div.class`games-modal-actions`(
        div.style`display:flex;gap:0.7em;flex-wrap:wrap;`(
          button
            .type`button`
            .class`admin-pill-button`
            .attr('disabled', _ => isSaving ? 'disabled' : null)
            .onClick(onSave)(_ => isSaving ? 'Saving...' : 'Save'),
          button
            .type`button`
            .class`admin-secondary-button`
            .attr('disabled', _ => isSaving ? 'disabled' : null)
            .onClick(onCancel)('Cancel')
        ),
        _ => isEditing
          ? button
              .type`button`
              .class`admin-danger-button`
              .attr('disabled', _ => isDeleting ? 'disabled' : null)
              .onClick(onDelete)(_ => isDeleting ? 'Deleting...' : 'Delete')
          : ''
      )
    )
  )
})

const optionalNumber = (value: any) => {
  if (value === '' || value === null || typeof value === 'undefined') return null
  const parsed = Number(value)
  return Number.isNaN(parsed) ? null : parsed
}

const numberOrNull = (value: any) => {
  if (typeof value === 'number' && !Number.isNaN(value)) return value
  if (value === '' || value === null || typeof value === 'undefined') return null
  const parsed = Number(value)
  return Number.isNaN(parsed) ? null : parsed
}

const dateInputValue = (value: any) => {
  if (!value) return ''
  if (typeof value === 'string') return value.slice(0, 10)
  if (typeof value.toDate === 'function') return value.toDate().toISOString().slice(0, 10)
  if (value.seconds) return new Date(value.seconds * 1000).toISOString().slice(0, 10)
  return ''
}

const formatDate = (value: any) => {
  const dateValue = dateInputValue(value)
  if (!dateValue) return 'No date'
  const date = new Date(`${dateValue}T12:00:00`)
  return Number.isNaN(date.getTime())
    ? dateValue
    : date.toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' })
}
