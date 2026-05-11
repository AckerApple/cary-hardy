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
  option,
  output,
  p,
  select,
  small,
  span,
  strong,
  tag,
  textarea,
} from 'taggedjs'
import {
  deleteGame,
  listGames,
  listManufacturers,
  listenGames$,
  listenManufacturers$,
  signOutUser,
  upsertGame,
} from '../firebase'
import type { Game, GameInput } from '../games.types'
import type { Manufacturer } from '../manufacturers.types'
import { createAdminAuthTag } from './adminPageShell.tag'
import { adminNavButtons } from './adminNavButtons.tag'
import { topNavBar } from '../ui/topNav.tag'

const emptyGame = (): GameInput => ({
  title: '',
  imageUrl: '',
  manufacturerId: '',
  manufacturer: '',
  yearReleased: null,
  notes: '',
})

let gamesLoaded = false
let latestGames: Array<{ id: string } & Record<string, any>> | null = null
let gamesUnsubscribe: (() => void) | null = null
let gamesValueUnsubscribe: (() => void) | null = null
let latestManufacturers: Array<{ id: string } & Record<string, any>> | null = null
let manufacturersUnsubscribe: (() => void) | null = null
let manufacturersValueUnsubscribe: (() => void) | null = null

export const gamesAdminPageTag = createAdminAuthTag((onSignedOut) => gamesAdminPage(onSignedOut))

export const gamesAdminPage = tag((onSignedOut) => {
  gamesAdminPage.inputs(([_onSignedOut]) => {
    onSignedOut = output(_onSignedOut)
  })

  const signoutClick = () =>
    signOutUser()
      .then(onSignedOut)
      .catch((error) => console.error('Failed to sign out', error))

  let games = latestGames
  let manufacturers = latestManufacturers
  let modalOpen = false
  let editingId: string | null = null
  let editGame: GameInput = emptyGame()
  let isSaving = false
  let isDeleting = false
  let errorMessage = ''
  let fieldErrors: Record<string, string> = {}
  const refresh = callback(() => {})

  const startGamesListener = () => {
    if (gamesUnsubscribe) gamesUnsubscribe()
    if (gamesValueUnsubscribe) gamesValueUnsubscribe()
    games = null
    latestGames = null
    refresh()

    const games$ = listenGames$()
    gamesUnsubscribe = (games$ as any)?.unsubscribe || null
    const subscription = games$.subscribe((items) => {
      games = items
      latestGames = items
      refresh()
    })
    gamesValueUnsubscribe = () => subscription.unsubscribe()
  }

  const refreshGames = () =>
    listGames()
      .then((items) => {
        games = items
        latestGames = items
        refresh()
      })
      .catch((error) => {
        console.error('Failed to refresh games', error)
        errorMessage = 'Saved, but failed to refresh games. Reload the page to confirm.'
        refresh()
      })

  const startManufacturersListener = () => {
    if (manufacturersUnsubscribe) manufacturersUnsubscribe()
    if (manufacturersValueUnsubscribe) manufacturersValueUnsubscribe()
    manufacturers = null
    latestManufacturers = null
    refresh()

    const manufacturers$ = listenManufacturers$()
    manufacturersUnsubscribe = (manufacturers$ as any)?.unsubscribe || null
    const subscription = manufacturers$.subscribe((items) => {
      manufacturers = items
      latestManufacturers = items
      refresh()
    })
    manufacturersValueUnsubscribe = () => subscription.unsubscribe()
  }

  const refreshManufacturers = () =>
    listManufacturers()
      .then((items) => {
        manufacturers = items
        latestManufacturers = items
        refresh()
      })
      .catch((error) => {
        console.error('Failed to refresh manufacturers', error)
      })

  const openAdd = () => {
    editingId = null
    editGame = emptyGame()
    errorMessage = ''
    fieldErrors = {}
    modalOpen = true
    refresh()
  }

  const openEdit = (game: Game) => {
    editingId = game.id
    editGame = {
      id: game.id,
      title: game.title || '',
      imageUrl: game.imageUrl || '',
      manufacturerId: game.manufacturerId || '',
      manufacturer: game.manufacturer || '',
      yearReleased: numberOrNull(game.yearReleased),
      notes: game.notes || '',
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
    if (!editGame.title.trim()) nextFieldErrors.title = 'Game Title is required.'
    if (editGame.yearReleased !== null && Number.isNaN(Number(editGame.yearReleased))) {
      nextFieldErrors.yearReleased = 'Year Released must be numeric.'
    }
    fieldErrors = nextFieldErrors
    const messages = Object.values(nextFieldErrors)
    return messages.length ? messages[0] : ''
  }

  const saveGame = () => {
    if (isSaving) return
    const validationError = validateGame()
    if (validationError) {
      errorMessage = validationError
      refresh()
      return
    }

    isSaving = true
    errorMessage = ''
    fieldErrors = {}
    refresh()
    const selectedManufacturer = (manufacturers || []).find((manufacturer) => manufacturer.id === editGame.manufacturerId)
    tag.promise = upsertGame({
      ...editGame,
      id: editingId || undefined,
      title: editGame.title.trim(),
      imageUrl: (editGame.imageUrl || '').trim(),
      manufacturerId: (editGame.manufacturerId || '').trim(),
      manufacturer: (selectedManufacturer?.name || editGame.manufacturer || '').trim(),
      yearReleased: numberOrNull(editGame.yearReleased),
      notes: (editGame.notes || '').trim(),
    })
      .then(() => {
        isSaving = false
        closeModal()
        return refreshGames()
      })
      .catch((error) => {
        console.error('Failed to save game', error)
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
    if (!confirm('Delete this game from the games collection? Existing lineup entries or ratings may still reference it.')) return
    isDeleting = true
    errorMessage = ''
    refresh()
    tag.promise = deleteGame(editingId)
      .then(() => {
        isDeleting = false
        closeModal()
        return refreshGames()
      })
      .catch((error) => {
        console.error('Failed to delete game', error)
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
    if (!gamesUnsubscribe) startGamesListener()
    if (!manufacturersUnsubscribe) startManufacturersListener()
  }

  onDestroy(() => {
    if (gamesUnsubscribe) gamesUnsubscribe()
    if (gamesValueUnsubscribe) gamesValueUnsubscribe()
    if (manufacturersUnsubscribe) manufacturersUnsubscribe()
    if (manufacturersValueUnsubscribe) manufacturersValueUnsubscribe()
    gamesUnsubscribe = null
    gamesValueUnsubscribe = null
    manufacturersUnsubscribe = null
    manufacturersValueUnsubscribe = null
    latestGames = null
    latestManufacturers = null
    gamesLoaded = false
  })

  return noElement(
    topNavBar(() => adminNavButtons(signoutClick)),
    div.class`admin-crud-page`(
      div.class`admin-crud-header`(
        h3('Games Database'),
        button.type`button`.class`admin-pill-button`.onClick(openAdd)('Add')
      ),
      div.class`admin-crud-card`(
        p.style`margin-top:0;opacity:0.78;`('Manage canonical games used by lineup and ratings.'),
        _ => errorMessage && !modalOpen ? p.style`color:#f6c177;`(errorMessage) : '',
        div.class`admin-crud-list`(
          _ => {
            if (manufacturers === null) return small.style`opacity:0.7;`('Loading manufacturers...')
            if (!manufacturers.length) return small.style`opacity:0.7;`('No manufacturers found. Add a manufacturer first.')
            if (games === null) return small.style`opacity:0.7;`('Loading games...')

            const unmatchedGames = games.filter((game) =>
              !manufacturers.some((manufacturer) => isGameForManufacturer(game, manufacturer as Manufacturer))
            ) as Game[]

            return [
              ...manufacturers.map((manufacturer) => manufacturerSection({
                manufacturer: manufacturer as Manufacturer,
                games: gamesForManufacturer(manufacturer as Manufacturer, games || []),
                onGameClick: openEdit,
              }).key(manufacturer.id)),
              unmatchedGames.length
                ? manufacturerSection({
                    manufacturer: {
                      id: 'unmatched',
                      name: 'Unmatched Games',
                      logoUrl: '',
                      opinions: 'Games without a matching manufacturer link.',
                    },
                    games: unmatchedGames,
                    onGameClick: openEdit,
                  }).key('unmatched')
                : '',
            ]
          }
        ),
        div.style`margin-top:1em;display:flex;gap:0.75em;flex-wrap:wrap;`(
          a.href`../admin/current-games.html`.class`admin-secondary-button`('Lineup Admin'),
          a.href`../admin/manufacturers.html`.class`admin-secondary-button`('Manufacturers Admin'),
          a.href`../admin/game-ratings.html`.class`admin-secondary-button`('Ratings Admin')
        )
      ),
      _ => modalOpen
        ? gameModal({
            isEditing: Boolean(editingId),
            editGame,
            manufacturers: manufacturers || [],
            errorMessage,
            fieldErrors,
            isSaving,
            isDeleting,
            onChange: (nextGame) => {
              editGame = nextGame
              fieldErrors = {
                ...fieldErrors,
                title: nextGame.title?.trim() ? '' : fieldErrors.title,
                manufacturerId: nextGame.manufacturerId || nextGame.manufacturer?.trim() ? '' : fieldErrors.manufacturerId,
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

const manufacturerSection = tag(({
  manufacturer,
  games,
  onGameClick,
}: {
  manufacturer: Manufacturer
  games: Game[]
  onGameClick: (game: Game) => void
}) => {
  manufacturerSection.inputs((args) => {
    ;[{ manufacturer, games, onGameClick }] = args
    onGameClick = output(onGameClick)
  })

  return div.style`display:grid;gap:0.55em;padding:0.85em 0;border-top:1px solid rgba(255,255,255,0.12);`(
    div.style`display:flex;align-items:center;justify-content:space-between;gap:1em;flex-wrap:wrap;`(
      div.style`display:flex;align-items:center;gap:0.75em;min-width:0;`(
        _ => manufacturer.logoUrl
          ? img.class`admin-crud-thumb`.style`width:46px;height:46px;`.src`${manufacturer.logoUrl}`.attr('alt', _ => manufacturer.name || 'Manufacturer logo')
          : div.class`admin-crud-thumb admin-crud-thumb-placeholder`.style`width:46px;height:46px;font-size:1em;`(_ => (manufacturer.name || '?').slice(0, 2).toUpperCase()),
        div.style`min-width:0;`(
          strong(_ => manufacturer.name || 'Untitled manufacturer'),
          div.style`margin-top:0.12em;opacity:0.66;`(
            small(_ => `${games.length} game${games.length === 1 ? '' : 's'}`)
          )
        )
      )
    ),
    _ => games.length
      ? div.style`display:grid;gap:0.55em;`(
          games.map((game) => gameRow({
            game,
            manufacturers: [manufacturer],
            onClick: onGameClick,
          }).key(game.id))
        )
      : small.style`opacity:0.7;`('No games for this manufacturer yet.')
  )
})

const gamesForManufacturer = (manufacturer: Manufacturer, games: Array<{ id: string } & Record<string, any>>) => {
  return games.filter((game) => isGameForManufacturer(game, manufacturer)) as Game[]
}

const isGameForManufacturer = (
  game: { id: string } & Record<string, any>,
  manufacturer: Manufacturer
) =>
  game.manufacturerId === manufacturer.id ||
  normalizeManufacturerName(game.manufacturer) === normalizeManufacturerName(manufacturer.name)

const gameRow = tag(({
  game,
  manufacturers,
  onClick,
}: {
  game: Game
  manufacturers: Array<{ id: string } & Record<string, any>>
  onClick: (game: Game) => void
}) => {
  gameRow.inputs((args) => {
    ;[{ game, manufacturers, onClick }] = args
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
          manufacturerLabel(game, manufacturers),
          game.yearReleased ? String(game.yearReleased) : '',
        ].filter(Boolean).join(' - ') || 'No manufacturer/year')
      )
    ),
    small.style`opacity:0.62;text-align:right;display:grid;gap:0.1em;`(
      span.style`font-size:0.78em;text-transform:uppercase;`('Game ID'),
      span(_ => game.id)
    )
  )
})

const manufacturerLabel = (
  game: Game,
  manufacturers: Array<{ id: string } & Record<string, any>>
) => {
  const manufacturer = manufacturers.find((item) => item.id === game.manufacturerId)
  return manufacturer?.name || game.manufacturer || ''
}

const normalizeManufacturerName = (value: any) =>
  String(value || '').trim().toLowerCase()

const gameModal = tag(({
  isEditing,
  editGame,
  manufacturers,
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
  editGame: GameInput
  manufacturers: Array<{ id: string } & Record<string, any>>
  errorMessage: string
  fieldErrors: Record<string, string>
  isSaving: boolean
  isDeleting: boolean
  onChange: (nextGame: GameInput) => void
  onSave: () => void
  onDelete: () => void
  onCancel: () => void
}) => {
  gameModal.inputs((args) => {
    ;[{
      isEditing,
      editGame,
      manufacturers,
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

  const updateGame = (patch: Partial<GameInput>) => onChange({ ...editGame, ...patch })
  const invalidBorder = (fieldName: string) => fieldErrors[fieldName] ? '#f87171' : 'rgba(255,255,255,0.2)'
  const labelColor = (fieldName: string) => fieldErrors[fieldName] ? '#fca5a5' : 'inherit'

  return div.class`admin-crud-modal-backdrop`(
    div.class`admin-crud-modal`(
      div.style`display:flex;justify-content:space-between;gap:1em;align-items:flex-start;`(
        div(
          h3.style`margin:0;`(isEditing ? 'Edit Game' : 'Add Game'),
          small.style`opacity:0.72;`('Manage the canonical machine record.')
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
        label.attr('style.color', _ => labelColor('title'))('Game Title'),
        input.type`text`.value(_ => editGame.title || '').onInput((event: any) => {
          updateGame({ title: event?.target?.value || '' })
        }).attr('aria-invalid', _ => fieldErrors.title ? 'true' : 'false').attr('title', _ => fieldErrors.title || '').attr('style.borderColor', _ => invalidBorder('title'))(),

        label('Game Image URL'),
        input.type`url`.value(_ => editGame.imageUrl || '').onInput((event: any) => {
          updateGame({ imageUrl: event?.target?.value || '' })
        })(),

        label.attr('style.color', _ => labelColor('manufacturerId'))('Manufacturer'),
        div.class`admin-field-with-link`(
          select.value(_ => editGame.manufacturerId || '').onChange((event: any) => {
            updateGame({ manufacturerId: event?.target?.value || '' })
          }).attr('aria-invalid', _ => fieldErrors.manufacturerId ? 'true' : 'false').attr('title', _ => fieldErrors.manufacturerId || '').attr('style.borderColor', _ => invalidBorder('manufacturerId'))(
            [
              option.value``(manufacturers.length ? 'Select a manufacturer' : 'Add a manufacturer first'),
              ...manufacturers.map((manufacturer) => option.value`${manufacturer.id}`(manufacturer.name || 'Untitled manufacturer')),
            ]
          ),
          a.href`/admin/manufacturers.html`.class`admin-inline-edit-link`('edit manufacturers')
        ),

        label.attr('style.color', _ => labelColor('yearReleased'))('Year Released'),
        input.type`number`.value(_ => editGame.yearReleased ?? '').onInput((event: any) => {
          updateGame({ yearReleased: optionalNumber(event?.target?.value) })
        }).attr('aria-invalid', _ => fieldErrors.yearReleased ? 'true' : 'false').attr('title', _ => fieldErrors.yearReleased || '').attr('style.borderColor', _ => invalidBorder('yearReleased'))(),

        label('Notes'),
        textarea.value(_ => editGame.notes || '').onInput((event: any) => {
          updateGame({ notes: event?.target?.value || '' })
        })()
      ),
      div.class`admin-crud-modal-actions`(
        div.style`display:flex;gap:0.7em;flex-wrap:wrap;`(
          button.type`button`.class`admin-pill-button`.attr('disabled', _ => isSaving ? 'disabled' : null).onClick(onSave)(_ => isSaving ? 'Saving...' : 'Save'),
          button.type`button`.class`admin-secondary-button`.attr('disabled', _ => isSaving ? 'disabled' : null).onClick(onCancel)('Cancel')
        ),
        _ => isEditing
          ? button.type`button`.class`admin-danger-button`.attr('disabled', _ => isDeleting ? 'disabled' : null).onClick(onDelete)(_ => isDeleting ? 'Deleting...' : 'Delete')
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
