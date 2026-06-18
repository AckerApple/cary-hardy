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
  tag,
  textarea,
} from 'taggedjs'
import {
  deletePastOwnedGame,
  listGames,
  listPastOwnedGames,
  listenGames$,
  listenPastOwnedGames$,
  signOutUser,
  syncPastOwnedGamesFromPinside,
  upsertPastOwnedGame,
} from '../firebase'
import type { PastOwnedGame, PastOwnedGameInput, PinsideHistoryGame } from '../pastOwnedGames.types'
import { topNavBar } from '../ui/topNav.tag'
import { adminNavButtons } from './adminNavButtons.tag'
import { createAdminAuthTag } from './adminPageShell.tag'
import { groupedGameSelect } from './groupedGameSelect.tag'

const PINSIDE_HISTORY_URL = 'https://pinside.com/pinball/community/pinsiders/thecapn/collection/history'

const emptyGame = (): PastOwnedGameInput => ({
  gameId: '',
  title: '',
  dateAddedToCollection: '',
  dateRemovedFromCollection: '',
  notes: '',
  isVisible: true,
  pinsideUrl: '',
  pinsideId: '',
  source: '',
})

let gamesLoaded = false
let latestPastOwnedGames: Array<{ id: string } & Record<string, any>> | null = null
let gamesUnsubscribe: (() => void) | null = null
let gamesValueUnsubscribe: (() => void) | null = null
let latestGameLibrary: Array<{ id: string } & Record<string, any>> | null = null
let gameLibraryUnsubscribe: (() => void) | null = null
let gameLibraryValueUnsubscribe: (() => void) | null = null

export const pastOwnedGamesAdminPageTag = createAdminAuthTag((onSignedOut) => pastOwnedGamesAdminPage(onSignedOut))

export const pastOwnedGamesAdminPage = tag((onSignedOut) => {
  pastOwnedGamesAdminPage.inputs(([_onSignedOut]) => {
    onSignedOut = output(_onSignedOut)
  })

  const signoutClick = () =>
    signOutUser()
      .then(onSignedOut)
      .catch((error) => console.error('Failed to sign out', error))

  let isSaving = false
  let isDeleting = false
  let isSyncing = false
  let errorMessage = ''
  let syncMessage = ''
  let importHtml = ''
  let syncPanelOpen = false
  let fieldErrors: Record<string, string> = {}
  let modalOpen = false
  let editingId: string | null = null
  let editGame: PastOwnedGameInput = emptyGame()
  let pastOwnedGames = latestPastOwnedGames
  let gameLibrary = latestGameLibrary
  const refresh = callback(() => {})

  const startGamesListener = () => {
    if (gamesUnsubscribe) gamesUnsubscribe()
    if (gamesValueUnsubscribe) gamesValueUnsubscribe()
    pastOwnedGames = null
    latestPastOwnedGames = null
    errorMessage = ''
    refresh()

    const liveGames$ = listenPastOwnedGames$()
    gamesUnsubscribe = (liveGames$ as any)?.unsubscribe || null
    const valueSubscription = liveGames$.subscribe((items) => {
      pastOwnedGames = items
      latestPastOwnedGames = items
      refresh()
    })
    gamesValueUnsubscribe = () => valueSubscription.unsubscribe()
  }

  const startGameLibraryListener = () => {
    if (gameLibraryUnsubscribe) gameLibraryUnsubscribe()
    if (gameLibraryValueUnsubscribe) gameLibraryValueUnsubscribe()
    gameLibrary = null
    latestGameLibrary = null
    refresh()

    const liveGames$ = listenGames$()
    gameLibraryUnsubscribe = (liveGames$ as any)?.unsubscribe || null
    const valueSubscription = liveGames$.subscribe((items) => {
      gameLibrary = items
      latestGameLibrary = items
      refresh()
    })
    gameLibraryValueUnsubscribe = () => valueSubscription.unsubscribe()
  }

  const refreshGamesList = () =>
    listPastOwnedGames()
      .then((items) => {
        pastOwnedGames = items
        latestPastOwnedGames = items
        refresh()
      })
      .catch((error) => {
        console.error('Failed to refresh past owned games list', error)
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

  const openEdit = (game: PastOwnedGame) => {
    editingId = game.id
    editGame = {
      id: game.id,
      gameId: game.gameId || '',
      title: '',
      dateAddedToCollection: dateInputValue(game.dateAddedToCollection),
      dateRemovedFromCollection: dateInputValue(game.dateRemovedFromCollection),
      imageUrl: game.imageUrl || '',
      manufacturer: game.manufacturer || '',
      yearReleased: numberOrNull(game.yearReleased),
      notes: game.notes || '',
      isVisible: game.isVisible !== false,
      pinsideUrl: game.pinsideUrl || '',
      pinsideId: game.pinsideId || '',
      source: game.source || '',
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

    if (!editGame.gameId) {
      nextFieldErrors.gameId = 'Game is required.'
    }

    if (editGame.yearReleased !== null && typeof editGame.yearReleased !== 'undefined' && Number.isNaN(Number(editGame.yearReleased))) {
      nextFieldErrors.yearReleased = 'Year must be numeric.'
    }

    fieldErrors = nextFieldErrors
    return Object.values(nextFieldErrors)[0] || ''
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
    tag.promise = upsertPastOwnedGame({
      ...editGame,
      id: editingId || undefined,
      gameId: (editGame.gameId || '').trim(),
      title: '',
      imageUrl: (editGame.imageUrl || '').trim(),
      manufacturer: (editGame.manufacturer || '').trim(),
      notes: (editGame.notes || '').trim(),
      pinsideUrl: (editGame.pinsideUrl || '').trim(),
      pinsideId: (editGame.pinsideId || '').trim(),
      source: (editGame.source || '').trim(),
      yearReleased: numberOrNull(editGame.yearReleased),
      isVisible: editGame.isVisible !== false,
    })
      .then(() => {
        isSaving = false
        closeModal()
        return refreshGamesList()
      })
      .catch((error) => {
        console.error('Failed to save past owned game', error)
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
    if (!confirm('Delete this past owned game?')) return
    isDeleting = true
    errorMessage = ''
    refresh()
    tag.promise = deletePastOwnedGame(editingId)
      .then(() => {
        isDeleting = false
        closeModal()
        return refreshGamesList()
      })
      .catch((error) => {
        console.error('Failed to delete past owned game', error)
        errorMessage = 'Failed to delete game.'
        refresh()
      })
      .finally(() => {
        isDeleting = false
        refresh()
      })
  }

  const syncParsedGames = (games: PinsideHistoryGame[]) => {
    if (!games.length) {
      syncMessage = 'No Pinside games were found. Paste the copied Pinside history text and try again.'
      refresh()
      return
    }

    isSyncing = true
    syncMessage = `Found ${games.length} Pinside game${games.length === 1 ? '' : 's'}. Syncing new items only...`
    refresh()
    tag.promise = syncPastOwnedGamesFromPinside(games, gameLibrary || [])
      .then((result) => {
        syncMessage = `Sync complete. Added ${result.added}; skipped ${result.skipped} already-present item${result.skipped === 1 ? '' : 's'}.`
        return refreshGameLibrary().then(refreshGamesList)
      })
      .catch((error) => {
        console.error('Failed to sync Pinside games', error)
        syncMessage = 'Sync failed while writing to Firestore. Check permissions and try again.'
        refresh()
      })
      .finally(() => {
        isSyncing = false
        refresh()
      })
  }

  const syncFromPastedHtml = () => {
    const games = parsePinsideHistoryHtml(importHtml)
    syncParsedGames(games)
  }

  const toggleSyncPanel = () => {
    syncPanelOpen = !syncPanelOpen
    refresh()
  }

  if (!gamesLoaded) {
    gamesLoaded = true
    if (!gamesUnsubscribe) startGamesListener()
    if (!gameLibraryUnsubscribe) startGameLibraryListener()
  }

  onDestroy(() => {
    if (gamesUnsubscribe) gamesUnsubscribe()
    if (gamesValueUnsubscribe) gamesValueUnsubscribe()
    if (gameLibraryUnsubscribe) gameLibraryUnsubscribe()
    if (gameLibraryValueUnsubscribe) gameLibraryValueUnsubscribe()
    gamesUnsubscribe = null
    gamesValueUnsubscribe = null
    gameLibraryUnsubscribe = null
    gameLibraryValueUnsubscribe = null
    gamesLoaded = false
    latestPastOwnedGames = null
    latestGameLibrary = null
  })

  return noElement(
    topNavBar(() => adminNavButtons(signoutClick)),
      div.class`admin-crud-page`(
      div.class`admin-crud-header`(
        h3('📜 Past Games Owned'),
        div.style`display:flex;gap:0.75em;align-items:center;flex-wrap:wrap;`(
          small.style`opacity:0.72;`(_ => pastOwnedGames === null
            ? 'Loading count...'
            : `${pastOwnedGames.length} past game${pastOwnedGames.length === 1 ? '' : 's'}`
          ),
          button.type`button`.class`admin-pill-button`.onClick(openAdd)('Add')
        )
      ),
      div.class`admin-crud-card`.style`margin-bottom:1em;`(
        div.style`display:flex;gap:0.75em;flex-wrap:wrap;align-items:center;`(
          button
            .type`button`
            .class`admin-secondary-button`
            .attr('aria-expanded', _ => syncPanelOpen ? 'true' : 'false')
            .onClick(toggleSyncPanel)('Pinside Sync')
        ),
        _ => syncPanelOpen
          ? div.style`margin-top:0.9em;`(
              p.style`margin-top:0;opacity:0.78;`('Paste copied Pinside history text to add missing past-owned games. Imported games are created in the games database and linked here.'),
              div.style`display:flex;gap:0.75em;flex-wrap:wrap;align-items:center;`(
                a.href`${PINSIDE_HISTORY_URL}`.class`admin-secondary-button`.attr('target', '_blank').attr('rel', 'noopener noreferrer')('Open Pinside History'),
                button.type`button`.class`admin-pill-button`.attr('disabled', _ => isSyncing ? 'disabled' : null).onClick(syncFromPastedHtml)('Sync Pasted Text')
              ),
              _ => syncMessage ? p.style`color:#f6c177;`(syncMessage) : '',
              textarea
                .placeholder`Paste copied Pinside history text here.`
                .value(_ => importHtml)
                .onInput((event: any) => {
                  importHtml = event?.target?.value || ''
                  refresh()
                })
                .style`margin-top:0.8em;width:100%;min-height:120px;`
                ()
            )
          : ''
      ),
      div.class`admin-crud-card`(
        p.style`margin-top:0;opacity:0.78;`('Manage the Firestore pastOwnedGames collection.'),
        _ => errorMessage && !modalOpen ? p.style`color:#f6c177;`(errorMessage) : '',
        div.class`admin-crud-list`(
          _ => {
            if (pastOwnedGames === null) return small.style`opacity:0.7;`('Loading games...')

            return pastOwnedGames.length
              ? sortPastOwnedGamesByGameId(pastOwnedGames as PastOwnedGame[]).map((game) => gameAdminRow({
                  game: resolvePastOwnedGame(game as PastOwnedGame, gameLibrary || []),
                  onClick: openEdit,
                }).key(game.id))
              : small.style`opacity:0.7;`('No past owned games found. Use Add or paste Pinside history text.')
          }
        )
      ),
      _ => modalOpen
        ? pastOwnedGameModal({
            isEditing: Boolean(editingId),
            editGame,
            gameLibrary: gameLibrary || [],
            isGameLibraryLoaded: gameLibrary !== null,
            errorMessage,
            fieldErrors,
            isSaving,
            isDeleting,
            onChange: (nextGame) => {
              editGame = nextGame
              fieldErrors = {
                ...fieldErrors,
                gameId: nextGame.gameId ? '' : fieldErrors.gameId,
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
  game: PastOwnedGame
  onClick: (game: PastOwnedGame) => void
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
        small(
          _ => [
            game.manufacturer || '',
            game.yearReleased ? String(game.yearReleased) : '',
          ].filter(Boolean).join(' · ') || 'No manufacturer/year',
          _ => game.gameId && game.isMissingGame
            ? span.style`color:#f87171;font-weight:700;`(` · Missing game: ${game.gameId}`)
            : '',
          _ => game.source === 'pinside' ? ' · Pinside' : ''
        )
      )
    ),
    small.style`opacity:0.62;text-align:right;display:grid;gap:0.1em;`(
      span.style`font-size:0.78em;text-transform:uppercase;`('Past Owned'),
      span(_ => [
        formatDate(game.dateAddedToCollection),
        game.dateRemovedFromCollection ? ` to ${formatDate(game.dateRemovedFromCollection)}` : '',
        game.isVisible === false ? ' · Hidden' : ''
      ].join(''))
    )
  )
})

const resolvePastOwnedGame = (
  pastOwnedGame: PastOwnedGame,
  gameLibrary: Array<{ id: string } & Record<string, any>>
) => {
  const libraryGame = findGameByPastOwnedGame(gameLibrary, pastOwnedGame)
  return {
    ...pastOwnedGame,
    title: libraryGame?.title || pastOwnedGame.title || pastOwnedGame.sourceTitle || '',
    imageUrl: bestGameImageUrl(libraryGame, pastOwnedGame),
    manufacturer: libraryGame?.manufacturer || pastOwnedGame.manufacturer || '',
    yearReleased: libraryGame?.yearReleased ?? pastOwnedGame.yearReleased ?? null,
    isMissingGame: Boolean(pastOwnedGame.gameId && !libraryGame),
  } as PastOwnedGame
}

const findGameByPastOwnedGame = (
  gameLibrary: Array<{ id: string } & Record<string, any>>,
  pastOwnedGame: PastOwnedGame
) =>
  findGameById(gameLibrary, pastOwnedGame.gameId)
    || findGameById(gameLibrary, pastOwnedGame.title)
    || findGameById(gameLibrary, pastOwnedGame.sourceTitle)
    || null

const findGameById = (
  gameLibrary: Array<{ id: string } & Record<string, any>>,
  gameId: any
) => {
  const normalizedGameId = normalizeGameId(gameId)
  const sluggedGameId = slugifyGameId(gameId)
  if (!normalizedGameId) return null

  return gameLibrary.find((game) => game.id === gameId)
    || gameLibrary.find((game) => normalizeGameId(game.id) === normalizedGameId)
    || gameLibrary.find((game) => slugifyGameId(game.id) === sluggedGameId)
    || gameLibrary.find((game) => slugifyGameId(game.title) === sluggedGameId)
    || null
}

const normalizeGameId = (value: any) =>
  String(value || '').trim().toLowerCase()

const slugifyGameId = (value: any) =>
  normalizeGameId(value)
    .replace(/['’]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')

const bestGameImageUrl = (
  libraryGame: ({ id: string } & Record<string, any>) | null,
  record: Record<string, any>
) =>
  String(
    libraryGame?.imageUrl ||
    libraryGame?.gameImageUrl ||
    libraryGame?.backglassUrl ||
    libraryGame?.image ||
    record.imageUrl ||
    record.gameImageUrl ||
    record.backglassUrl ||
    record.image ||
    ''
  ).trim()

const sortPastOwnedGamesByGameId = (games: PastOwnedGame[]) =>
  [...games].sort((a, b) => {
    const gameIdCompare = (a.gameId || '').localeCompare(b.gameId || '', undefined, { sensitivity: 'base' })
    if (gameIdCompare) return gameIdCompare

    return (a.id || '').localeCompare(b.id || '', undefined, { sensitivity: 'base' })
  })

const pastOwnedGameModal = tag(({
  isEditing,
  editGame,
  gameLibrary,
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
  editGame: PastOwnedGameInput
  gameLibrary: Array<{ id: string } & Record<string, any>>
  isGameLibraryLoaded: boolean
  errorMessage: string
  fieldErrors: Record<string, string>
  isSaving: boolean
  isDeleting: boolean
  onChange: (nextGame: PastOwnedGameInput) => void
  onSave: () => void
  onDelete: () => void
  onCancel: () => void
}) => {
  pastOwnedGameModal.inputs((args) => {
    ;[{
      isEditing,
      editGame,
      gameLibrary,
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

  const updateGame = (patch: Partial<PastOwnedGameInput>) => {
    onChange({ ...editGame, ...patch })
  }

  return div.class`admin-crud-modal-backdrop`(
    div.class`admin-crud-modal`(
      div.style`display:flex;justify-content:space-between;gap:1em;align-items:flex-start;`(
        div(
          h3.style`margin:0;`(isEditing ? 'Edit Past Game' : 'Add Past Game'),
          small.style`opacity:0.72;`(isEditing ? 'Update this past owned entry.' : 'Create a new past owned entry.')
        ),
        button.type`button`.class`admin-secondary-button`.onClick(onCancel)('Cancel')
      ),
      _ => errorMessage ? p.style`color:#f6c177;`(errorMessage) : '',
      div.class`admin-crud-form-grid`.style`margin-top:1em;`(
        label('Game'),
        _ => groupedGameSelect({
            value: editGame.gameId || '',
            games: gameLibrary,
            isLoaded: isGameLibraryLoaded,
            fieldError: fieldErrors.gameId,
            onChange: (gameId) => updateGame({ gameId }),
          }).key(`${isGameLibraryLoaded ? 'loaded' : 'loading'}-${gameLibrary.length}`),

        label('Date Added to Collection'),
        input.type`date`.value(_ => editGame.dateAddedToCollection || '').onInput((event: any) => {
          updateGame({ dateAddedToCollection: event?.target?.value || '' })
        })(),

        label('Date Removed from Collection'),
        input.type`date`.value(_ => editGame.dateRemovedFromCollection || '').onInput((event: any) => {
          updateGame({ dateRemovedFromCollection: event?.target?.value || '' })
        })(),

        label('Pinside URL'),
        input.type`url`.value(_ => editGame.pinsideUrl || '').onInput((event: any) => {
          updateGame({ pinsideUrl: event?.target?.value || '' })
        })(),

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
          button.type`button`.class`admin-pill-button`.attr('disabled', _ => isSaving ? 'disabled' : null).onClick(onSave)(_ => isSaving ? 'Saving...' : 'Save'),
          button.type`button`.class`admin-secondary-button`.attr('disabled', _ => isSaving ? 'disabled' : null).onClick(onCancel)('Cancel')
        ),
        _ => isEditing
          ? button.type`button`.class`admin-danger-button`.attr('disabled', _ => isDeleting ? 'disabled' : null).onClick(onDelete)(_ => isDeleting ? '🗑️ Deleting...' : '🗑️ Delete')
          : ''
      )
    )
  )
})

const parsePinsideHistoryHtml = (html: string): PinsideHistoryGame[] => {
  if (!html.trim()) return []
  const htmlGames = parsePinsideMachineLinks(html)
  if (htmlGames.length) return htmlGames

  return parsePinsideHistoryText(html)
}

const parsePinsideMachineLinks = (html: string): PinsideHistoryGame[] => {
  const doc = new DOMParser().parseFromString(html, 'text/html')
  const anchors = Array.from(doc.querySelectorAll('a[href*="/pinball/machine/"]')) as HTMLAnchorElement[]
  const gamesByUrl = new Map<string, PinsideHistoryGame>()

  anchors.forEach((anchor) => {
    const title = cleanGameTitle(anchor.textContent || anchor.getAttribute('title') || '')
    if (!title || title.length < 2) return

    const href = anchor.getAttribute('href') || ''
    const pinsideUrl = href.startsWith('http') ? href : `https://pinside.com${href}`
    const row = anchor.closest('tr, li, article, .game, .machine, .collection-item') || anchor.parentElement
    const image = row?.querySelector('img') as HTMLImageElement | null
    const imageSrc = image?.getAttribute('src') || image?.getAttribute('data-src') || ''
    const rowText = row?.textContent || ''
    const yearMatch = rowText.match(/\b(19\d{2}|20\d{2})\b/)
    const pinsideId = pinsideUrl.split('/pinball/machine/')[1]?.split(/[/?#]/)[0] || ''

    gamesByUrl.set(pinsideUrl, {
      title,
      pinsideUrl,
      pinsideId,
      imageUrl: imageSrc.startsWith('//') ? `https:${imageSrc}` : imageSrc,
      yearReleased: yearMatch ? Number(yearMatch[1]) : null,
    })
  })

  return [...gamesByUrl.values()].sort((a, b) =>
    a.title.localeCompare(b.title, undefined, { sensitivity: 'base' })
  )
}

const parsePinsideHistoryText = (text: string): PinsideHistoryGame[] => {
  const lines = text
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean)
  const games: PinsideHistoryGame[] = []
  let index = 0

  while (index < lines.length) {
    const title = cleanGameTitle(lines[index] || '')
    const detailLine = lines[index + 1] || ''
    const details = parseManufacturerYearLine(detailLine)

    if (!title || !details) {
      index += 1
      continue
    }

    const game: PinsideHistoryGame = {
      title,
      manufacturer: details.manufacturer,
      yearReleased: details.yearReleased,
    }

    index += 2
    while (index < lines.length) {
      const line = lines[index]
      const nextDetails = parseManufacturerYearLine(lines[index + 1] || '')

      if (nextDetails && !isHistoryDateLine(line)) {
        break
      }

      const purchasedDate = parseHistoryDate(line, 'Purchased')
      const soldDate = parseHistoryDate(line, 'Sold')
      if (purchasedDate) {
        game.dateAddedToCollection = purchasedDate
      } else if (soldDate) {
        game.dateRemovedFromCollection = soldDate
      }

      index += 1
    }

    games.push(game)
  }

  return games
}

const parseManufacturerYearLine = (line: string) => {
  const match = line.match(/^(.+),\s*(19\d{2}|20\d{2})$/)
  if (!match) return null
  return {
    manufacturer: match[1].trim(),
    yearReleased: Number(match[2]),
  }
}

const isHistoryDateLine = (line: string) =>
  /^(Purchased|Sold)\s+[A-Za-z]+\s+\d{4}$/i.test(line)

const parseHistoryDate = (line: string, label: 'Purchased' | 'Sold') => {
  const match = line.match(new RegExp(`^${label}\\s+([A-Za-z]+)\\s+(\\d{4})$`, 'i'))
  if (!match) return ''

  const monthIndex = monthNames.findIndex((month) => month.toLowerCase() === match[1].toLowerCase())
  if (monthIndex < 0) return ''
  return `${match[2]}-${String(monthIndex + 1).padStart(2, '0')}-01`
}

const monthNames = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]

const cleanGameTitle = (value: string) =>
  value
    .replace(/\s+/g, ' ')
    .replace(/\b(details|machine|view)\b/gi, '')
    .trim()

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
