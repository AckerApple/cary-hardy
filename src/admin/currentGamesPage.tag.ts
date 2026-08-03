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
  option,
  p,
  select,
  small,
  span,
  strong,
  tag,
  textarea,
} from 'taggedjs'
import {
  deleteCurrentGame,
  listGames,
  listCurrentGames,
  listenGames$,
  listenCurrentGames$,
  listenGameTiers$,
  signOutUser,
  upsertCurrentGame,
} from '../firebase'
import { createAdminAuthTag } from './adminPageShell.tag'
import { adminNavButtons } from './adminNavButtons.tag'
import { groupedGameSelect } from './groupedGameSelect.tag'
import { topNavBar } from '../ui/topNav.tag'
import type { CurrentGame, CurrentGameInput } from '../currentGames.types'
import type { GameTier } from '../gameTiers.types'

const emptyGame = (): CurrentGameInput => ({
  gameId: '',
  tierId: '',
  dateAddedToCollection: '',
  notes: '',
  isVisible: true,
})

let gamesLoaded = false
let latestGames: Array<{ id: string } & Record<string, any>> | null = null
let gamesUnsubscribe: (() => void) | null = null
let gamesValueUnsubscribe: (() => void) | null = null
let latestGameLibrary: Array<{ id: string } & Record<string, any>> | null = null
let gameLibraryUnsubscribe: (() => void) | null = null
let gameLibraryValueUnsubscribe: (() => void) | null = null
let latestGameTiers: GameTier[] | null = null
let gameTiersUnsubscribe: (() => void) | null = null
let gameTiersValueUnsubscribe: (() => void) | null = null

export const currentGamesAdminPageTag = createAdminAuthTag((onSignedOut) => currentGamesAdminPage(onSignedOut))

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
  let gameLibrary = latestGameLibrary
  let gameTiers = latestGameTiers
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

  const startGameLibraryListener = () => {
    if (gameLibraryUnsubscribe) {
      gameLibraryUnsubscribe()
      gameLibraryUnsubscribe = null
    }
    if (gameLibraryValueUnsubscribe) {
      gameLibraryValueUnsubscribe()
      gameLibraryValueUnsubscribe = null
    }
    gameLibrary = null
    latestGameLibrary = null
    refresh()

    const liveGames$ = listenGames$()
    gameLibraryUnsubscribe = (liveGames$ as any)?.unsubscribe || null
    const valueSubscription = liveGames$.subscribe((items) => {
      gameLibrary = items
      latestGameLibrary = items
      console.debug('Game library updated', {
        count: items?.length || 0,
        items,
      })
      refresh()
    })
    gameLibraryValueUnsubscribe = () => valueSubscription.unsubscribe()
  }

  const startGameTiersListener = () => {
    gameTiersUnsubscribe?.()
    gameTiersValueUnsubscribe?.()
    gameTiers = null
    latestGameTiers = null
    const tiers$ = listenGameTiers$()
    gameTiersUnsubscribe = (tiers$ as any)?.unsubscribe || null
    const subscription = tiers$.subscribe((items) => {
      if (!Array.isArray(items)) return
      gameTiers = items as GameTier[]
      latestGameTiers = gameTiers
      refresh()
    })
    gameTiersValueUnsubscribe = () => subscription.unsubscribe()
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

  const refreshGameLibrary = () =>
    listGames()
      .then((items) => {
        gameLibrary = items
        latestGameLibrary = items
        refresh()
      })
      .catch((error) => {
        console.error('Failed to refresh games library', error)
        errorMessage = 'Saved, but failed to refresh the games library. Reload the page to confirm.'
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
      gameId: game.gameId || '',
      tierId: game.tierId || '',
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

    if (!editGame.gameId && !(editGame.title || '').trim()) {
      nextFieldErrors.gameId = 'Game is required.'
    }

    if (!editGame.dateAddedToCollection) {
      nextFieldErrors.dateAddedToCollection = 'Date Added to Collection is required.'
    }

    const selectedGame = (gameLibrary || []).find((game) => game.id === editGame.gameId)
    const availableTierIds = Array.isArray(selectedGame?.tierIds) ? selectedGame.tierIds : []
    if (availableTierIds.length && !availableTierIds.includes(editGame.tierId)) {
      nextFieldErrors.tierId = 'Select the tier for this current game.'
    }

    if (editGame.yearReleased !== null && typeof editGame.yearReleased !== 'undefined' && Number.isNaN(Number(editGame.yearReleased))) {
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
      gameId: (editGame.gameId || '').trim(),
      tierId: (editGame.tierId || '').trim(),
      title: (editGame.title || '').trim(),
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
    if (!gameLibraryUnsubscribe) {
      startGameLibraryListener()
    }
    if (!gameTiersUnsubscribe) startGameTiersListener()
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
    if (gameLibraryUnsubscribe) {
      gameLibraryUnsubscribe()
      gameLibraryUnsubscribe = null
    }
    if (gameLibraryValueUnsubscribe) {
      gameLibraryValueUnsubscribe()
      gameLibraryValueUnsubscribe = null
    }
    gameTiersUnsubscribe?.()
    gameTiersValueUnsubscribe?.()
    gameTiersUnsubscribe = null
    gameTiersValueUnsubscribe = null
    latestGameTiers = null
    gamesLoaded = false
    latestGames = null
    latestGameLibrary = null
  })

  return noElement(
    topNavBar(() => adminNavButtons(signoutClick)),
    div.class`admin-crud-page`(
      div.class`admin-crud-header`(
        h3('⚪️ Current Game Lineup'),
        button.type`button`.class`admin-pill-button`.onClick(openAdd)('Add')
      ),
      div.class`admin-crud-card`(
        p.style`margin-top:0;opacity:0.78;`('Manage the Firestore currentGames collection used by the public lineup page.'),
        _ => errorMessage && !modalOpen ? p.style`color:#f6c177;`(errorMessage) : '',
        div.class`admin-crud-list`(
          _ => {
            if (currentGames === null) {
              return small.style`opacity:0.7;`('Loading games...')
            }

            return currentGames.length
              ? currentGames.map((game) => gameAdminRow({
                  game: resolveLineupGame(game as CurrentGame, gameLibrary || []),
                  onClick: openEdit,
                }).key(game.id))
              : small.style`opacity:0.7;`('No games found. Use Add Game to create the first one.')
          }
        ),
        div.style`margin-top:1em;display:flex;gap:0.75em;flex-wrap:wrap;`(
          a.href`../lineup.html`.class`admin-secondary-button`('View Public Lineup')
        )
      ),
      _ => modalOpen
        ? currentGameModal({
            isEditing: Boolean(editingId),
            editGame,
            gameLibrary: gameLibrary || [],
            gameTiers: gameTiers || [],
            isGameTiersLoaded: gameTiers !== null,
            isGameLibraryLoaded: gameLibrary !== null,
            errorMessage,
            fieldErrors,
            isSaving,
            isDeleting,
            onChange: (nextGame) => {
              editGame = nextGame
              fieldErrors = {
                ...fieldErrors,
                gameId: nextGame.gameId || nextGame.title?.trim() ? '' : fieldErrors.gameId,
                tierId: nextGame.tierId ? '' : fieldErrors.tierId,
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
  onClick: (game: CurrentGame) => void
}) => {
  gameAdminRow.inputs((args) => {
    ;[{ game, onClick }] = args
    onClick = output(onClick)
  })

  return button.type`button`.class`admin-crud-row`.onClick(() => onClick(game))(
    _ => game.imageUrl
      ? img.class`admin-crud-thumb`.src`${game.imageUrl}`.attr('alt', _ => game.title || 'Game image')
      : div.class`admin-crud-thumb admin-crud-thumb-placeholder`('PB'),
    div(
      strong(_ => game.title || 'Untitled game'),
      div.style`margin-top:0.15em;opacity:0.74;`(
        small(_ => [
          game.manufacturer || '',
          game.yearReleased ? String(game.yearReleased) : '',
        ].filter(Boolean).join(' · ') || 'No manufacturer/year')
      )
    ),
    small.style`opacity:0.62;text-align:right;display:grid;gap:0.1em;`(
      span.style`font-size:0.78em;text-transform:uppercase;`('Collected Date'),
      span(_ => [
        formatDate(game.dateAddedToCollection),
        game.isVisible === false ? ' · Hidden' : ''
      ].join(''))
    )
  )
})

const resolveLineupGame = (
  lineupGame: CurrentGame,
  gameLibrary: Array<{ id: string } & Record<string, any>>
) => {
  const libraryGame = gameLibrary.find((game) => game.id === lineupGame.gameId)
  return {
    ...lineupGame,
    title: libraryGame?.title || lineupGame.title || '',
    imageUrl: libraryGame?.imageUrl || lineupGame.imageUrl || '',
    manufacturer: libraryGame?.manufacturer || lineupGame.manufacturer || '',
    yearReleased: libraryGame?.yearReleased ?? lineupGame.yearReleased ?? null,
  } as CurrentGame
}

const currentGameModal = tag(({
  isEditing,
  editGame,
  gameLibrary,
  gameTiers,
  isGameTiersLoaded,
  isGameLibraryLoaded,
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
  gameLibrary: Array<{ id: string } & Record<string, any>>
  gameTiers: GameTier[]
  isGameTiersLoaded: boolean
  isGameLibraryLoaded: boolean
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
      gameLibrary,
      gameTiers,
      isGameTiersLoaded,
      isGameLibraryLoaded,
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

  return div.class`admin-crud-modal-backdrop`(
    div.class`admin-crud-modal`(
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
      div.class`admin-crud-form-grid`.style`margin-top:1em;`(
        label.attr('style.color', _ => labelColor('gameId'))('Game'),
        _ => groupedGameSelect({
            value: editGame.gameId || '',
            games: gameLibrary,
            isLoaded: isGameLibraryLoaded,
            fieldError: fieldErrors.gameId,
            editSelectedGame: true,
            onChange: (gameId) => updateGame({ gameId, tierId: '' }),
          }).key(`${isGameLibraryLoaded ? 'loaded' : 'loading'}-${gameLibrary.length}`),

        label.style`text-align:left;justify-self:start;`.attr('style.color', _ => labelColor('tierId'))('Game Tier'),
        _ => {
          const selectedGame = gameLibrary.find((game) => game.id === editGame.gameId)
          const availableTierIds = Array.isArray(selectedGame?.tierIds) ? selectedGame.tierIds : []
          const availableTiers = availableTierIds
            .map((tierId: string) => gameTiers.find((tier) => tier.id === tierId))
            .filter(Boolean) as GameTier[]
          return div.style`text-align:left;justify-self:stretch;width:100%;`(
            availableTiers.length
              ? div.style`display:grid;gap:0.45em;text-align:left;`(
                availableTiers.map((tier) => label.style`display:flex;gap:0.5em;align-items:center;text-align:left;justify-content:flex-start;`(
                  input.type`radio`.attr('name', 'current-game-tier').value`${tier.id}`
                    .attr('checked', _ => editGame.tierId === tier.id ? 'checked' : null)
                    .onChange(() => updateGame({ tierId: tier.id }))(),
                  span(`${tier.shortName} — ${tier.longName}`)
                ).key(tier.id))
                )
              : !isGameTiersLoaded
                ? small.style`opacity:0.72;`('Loading game tiers...')
                : editGame.gameId
                ? select.style`text-align:left;width:100%;`.value(_ => editGame.tierId || '').onChange((event: any) => {
                  updateGame({ tierId: event?.target?.value || '' })
                }).attr('aria-invalid', _ => fieldErrors.tierId ? 'true' : 'false').attr('title', _ => fieldErrors.tierId || '')(
                  [
                    option.value``(gameTiers.length ? 'Select a game tier' : 'No game tiers available'),
                    ...gameTiers.map((tier) => option.value`${tier.id}`(`${tier.shortName} — ${tier.longName}`)),
                  ]
                )
                : small.style`opacity:0.72;`('Select a game first.')
          )
        },

        label.attr('style.color', _ => labelColor('dateAddedToCollection'))('Date Added to Collection'),
        input.type`date`.value(_ => editGame.dateAddedToCollection || '').onInput((event: any) => {
          updateGame({ dateAddedToCollection: event?.target?.value || '' })
        }).attr('aria-invalid', _ => fieldErrors.dateAddedToCollection ? 'true' : 'false').attr('title', _ => fieldErrors.dateAddedToCollection || '').attr('style.borderColor', _ => invalidBorder('dateAddedToCollection'))(),

        label('Notes'),
        textarea.value(_ => editGame.notes || '').onInput((event: any) => {
          updateGame({ notes: event?.target?.value || '' })
        })(),

        label('Visible on public page'),
        label.style`display:flex;gap:0.5em;align-items:center;`(
          input.type`checkbox`.attr('checked', _ => editGame.isVisible !== false ? 'checked' : null).onChange((event: any) => {
            updateGame({ isVisible: Boolean(event?.target?.checked) })
          })(),
          span(_ => editGame.isVisible !== false ? 'Visible' : 'Hidden')
        )
      ),
      div.class`admin-crud-modal-actions`(
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
              .onClick(onDelete)(_ => isDeleting ? '🗑️ Deleting...' : '🗑️ Delete')
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
