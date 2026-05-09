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
  deleteGameRating,
  listGameRatings,
  listGames,
  listenGameRatings$,
  signOutUser,
  upsertGameRating,
} from '../firebase'
import type { GameRating, GameRatingInput } from '../gameRatings.types'
import { createAdminAuthTag } from './adminPageShell.tag'
import { adminNavButtons } from './adminNavButtons.tag'
import { groupedGameSelect } from './groupedGameSelect.tag'
import { topNavBar } from '../ui/topNav.tag'

const emptyRating = (): GameRatingInput => ({
  gameId: '',
  rating: null,
  review: '',
  videos: [],
  isVisible: true,
})

let ratingsLoaded = false
let latestGames: Array<{ id: string } & Record<string, any>> | null = null
let latestRatings: Array<{ id: string } & Record<string, any>> | null = null
let ratingsUnsubscribe: (() => void) | null = null
let ratingsValueUnsubscribe: (() => void) | null = null

export const gameRatingsAdminPageTag = createAdminAuthTag((onSignedOut) => gameRatingsAdminPage(onSignedOut))

export const gameRatingsAdminPage = tag((onSignedOut) => {
  gameRatingsAdminPage.inputs(([_onSignedOut]) => {
    onSignedOut = output(_onSignedOut)
  })

  const signoutClick = () =>
    signOutUser()
      .then(onSignedOut)
      .catch((error) => console.error('Failed to sign out', error))

  let games = latestGames
  let ratings = latestRatings
  let modalOpen = false
  let editingRatingId: string | null = null
  let editRating: GameRatingInput = emptyRating()
  let isSaving = false
  let isDeleting = false
  let errorMessage = ''
  let fieldErrors: Record<string, string> = {}
  const refresh = callback(() => {})

  const startRatingsListener = () => {
    if (ratingsUnsubscribe) ratingsUnsubscribe()
    if (ratingsValueUnsubscribe) ratingsValueUnsubscribe()
    ratings = null
    latestRatings = null
    refresh()

    const ratings$ = listenGameRatings$()
    ratingsUnsubscribe = (ratings$ as any)?.unsubscribe || null
    const subscription = ratings$.subscribe((items) => {
      ratings = items
      latestRatings = items
      refresh()
    })
    ratingsValueUnsubscribe = () => subscription.unsubscribe()
  }

  const refreshRatings = () =>
    listGameRatings()
      .then((items) => {
        ratings = items
        latestRatings = items
        refresh()
      })
      .catch((error) => {
        console.error('Failed to refresh game ratings', error)
        errorMessage = 'Saved, but failed to refresh ratings. Reload the page to confirm.'
        refresh()
      })

  const refreshGames = () =>
    listGames()
      .then((items) => {
        games = items
        latestGames = items
        refresh()
      })
      .catch((error) => {
        console.error('Failed to refresh games', error)
      })

  const ensureGamesLoaded = () => {
    if (games !== null) return Promise.resolve(games)
    refresh()
    return refreshGames()
      .then(() => games || [])
  }

  const openAdd = () => {
    editingRatingId = null
    editRating = {
      ...emptyRating(),
    }
    errorMessage = ''
    fieldErrors = {}
    modalOpen = true
    refresh()
    tag.promise = ensureGamesLoaded()
  }

  const openRating = (rating: GameRating) => {
    const ratingId = rating.id || rating.gameId
    editingRatingId = ratingId || null
    editRating = {
      id: ratingId,
      gameId: rating.gameId || rating.id || '',
      rating: typeof rating.rating === 'number' ? rating.rating : null,
      review: rating.review || '',
      videos: Array.isArray(rating.videos) ? rating.videos : [],
      isVisible: rating.isVisible !== false,
    }
    errorMessage = ''
    fieldErrors = {}
    modalOpen = true
    refresh()
    tag.promise = ensureGamesLoaded()
  }

  const closeModal = () => {
    if (isSaving || isDeleting) return
    editingRatingId = null
    editRating = emptyRating()
    fieldErrors = {}
    errorMessage = ''
    modalOpen = false
    refresh()
  }

  const validateRating = () => {
    const nextFieldErrors: Record<string, string> = {}
    if (!editRating.gameId) nextFieldErrors.gameId = 'Game is required.'
    if (editRating.rating === null || Number.isNaN(Number(editRating.rating))) {
      nextFieldErrors.rating = 'Rating is required.'
    } else if (Number(editRating.rating) < 0 || Number(editRating.rating) > 10) {
      nextFieldErrors.rating = 'Rating must be between 0 and 10.'
    }

    fieldErrors = nextFieldErrors
    const messages = Object.values(nextFieldErrors)
    return messages.length ? messages[0] : ''
  }

  const saveRating = () => {
    if (isSaving) return
    const validationError = validateRating()
    if (validationError) {
      errorMessage = validationError
      refresh()
      return
    }

    isSaving = true
    errorMessage = ''
    refresh()
    tag.promise = upsertGameRating({
      ...editRating,
      id: editRating.gameId,
      rating: Number(editRating.rating),
      review: (editRating.review || '').trim(),
      videos: cleanVideos(editRating.videos),
      isVisible: editRating.isVisible !== false,
    })
      .then(() => {
        isSaving = false
        closeModal()
        return refreshRatings()
      })
      .catch((error) => {
        console.error('Failed to save game rating', error)
        errorMessage = 'Failed to save rating. Check the fields and try again.'
        refresh()
      })
      .finally(() => {
        isSaving = false
        refresh()
      })
  }

  const removeRating = () => {
    if (!editingRatingId || isDeleting) return
    if (!confirm('Delete this game rating?')) return
    isDeleting = true
    errorMessage = ''
    refresh()
    tag.promise = deleteGameRating(editingRatingId)
      .then(() => {
        isDeleting = false
        closeModal()
        return refreshRatings()
      })
      .catch((error) => {
        console.error('Failed to delete game rating', error)
        errorMessage = 'Failed to delete rating.'
        refresh()
      })
      .finally(() => {
        isDeleting = false
        refresh()
      })
  }

  if (!ratingsLoaded) {
    ratingsLoaded = true
    if (!ratingsUnsubscribe) startRatingsListener()
  }

  onDestroy(() => {
    if (ratingsUnsubscribe) ratingsUnsubscribe()
    if (ratingsValueUnsubscribe) ratingsValueUnsubscribe()
    ratingsUnsubscribe = null
    ratingsValueUnsubscribe = null
    latestGames = null
    latestRatings = null
    ratingsLoaded = false
  })

  const ratedGameRows = () => {
    if (ratings === null) {
      return small.style`opacity:0.7;`('Loading ratings...')
    }
    if (!ratings.length) {
      return ''
    }
    return ratings.map((rating) => ratingAdminRow({
      rating: rating as GameRating,
      game: findGameForRating(rating as GameRating, games || []),
      onClick: openRating,
    }).key(rating.id || rating.gameId))
  }

  return noElement(
    topNavBar(() => adminNavButtons(signoutClick)),
    div.class`admin-crud-page`(
      div.class`admin-crud-header`(
        h3('Game Ratings'),
        button.type`button`.class`admin-pill-button`.onClick(openAdd)('Add')
      ),
      div.class`admin-crud-card`(
        _ => errorMessage && !modalOpen ? p.style`color:#f6c177;`(errorMessage) : '',
        div.class`admin-crud-list`(
          _ => ratedGameRows()
        ),
        div.style`margin-top:1em;display:flex;gap:0.75em;flex-wrap:wrap;`(
          a.href`../ratings.html`.class`admin-secondary-button`('View Public Ratings')
        )
      ),
      _ => modalOpen
        ? ratingModal({
            isEditing: Boolean(editingRatingId),
            editRating,
            games: games || [],
            isGamesLoaded: games !== null,
            errorMessage,
            fieldErrors,
            isSaving,
            isDeleting,
            onChange: (nextRating) => {
              editRating = nextRating
              fieldErrors = {
                ...fieldErrors,
                gameId: nextRating.gameId ? '' : fieldErrors.gameId,
                rating: nextRating.rating !== null && !Number.isNaN(Number(nextRating.rating)) ? '' : fieldErrors.rating,
              }
              refresh()
            },
            onSave: saveRating,
            onDelete: removeRating,
            onCancel: closeModal,
          })
        : ''
    )
  )
})

const ratingAdminRow = tag(({
  game,
  rating,
  onClick,
}: {
  game?: ({ id: string } & Record<string, any>) | null
  rating: GameRating
  onClick: (rating: GameRating) => void
}) => {
  ratingAdminRow.inputs((args) => {
    ;[{ game, rating, onClick }] = args
    onClick = output(onClick)
  })

  return button.type`button`.class`admin-crud-row`.onClick(() => onClick(rating))(
    _ => game?.imageUrl
      ? img.class`admin-crud-thumb`.src`${game.imageUrl}`.attr('alt', _ => game.title || 'Game image')
      : div.class`admin-crud-thumb admin-crud-thumb-placeholder`('PB'),
    div(
      strong(_ => game?.title || rating.gameId || rating.id || 'Untitled game'),
      div.style`margin-top:0.15em;opacity:0.74;`(
        small(_ => [
          game?.manufacturer || '',
          game?.yearReleased ? String(game.yearReleased) : '',
        ].filter(Boolean).join(' - ') || 'No manufacturer/year')
      )
    ),
    small.style`opacity:0.72;text-align:right;display:grid;gap:0.1em;`(
      span.style`font-size:0.78em;text-transform:uppercase;`('Rating'),
      span(_ => rating?.rating !== null && typeof rating?.rating !== 'undefined' ? `${rating.rating}/10` : 'Not rated'),
      _ => rating?.isVisible === false ? span('Hidden') : ''
    )
  )
})

const ratingModal = tag(({
  isEditing,
  editRating,
  games,
  isGamesLoaded,
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
  editRating: GameRatingInput
  games: Array<{ id: string } & Record<string, any>>
  isGamesLoaded: boolean
  errorMessage: string
  fieldErrors: Record<string, string>
  isSaving: boolean
  isDeleting: boolean
  onChange: (nextRating: GameRatingInput) => void
  onSave: () => void
  onDelete: () => void
  onCancel: () => void
}) => {
  ratingModal.inputs((args) => {
    ;[{
      isEditing,
      editRating,
      games,
      isGamesLoaded,
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

  const updateRating = (patch: Partial<GameRatingInput>) => {
    onChange({ ...editRating, ...patch })
  }

  const updateVideo = (index: number, patch: { url?: string; description?: string }) => {
    const videos = [...(editRating.videos || [])]
    videos[index] = {
      url: videos[index]?.url || '',
      description: videos[index]?.description || '',
      ...patch,
    }
    updateRating({ videos })
  }

  const addVideo = () => {
    updateRating({
      videos: [
        ...(editRating.videos || []),
        { url: '', description: '' },
      ],
    })
  }

  const removeVideo = (index: number) => {
    updateRating({
      videos: (editRating.videos || []).filter((_, videoIndex) => videoIndex !== index),
    })
  }

  const invalidBorder = (fieldName: string) =>
    fieldErrors[fieldName] ? '#f87171' : 'rgba(255,255,255,0.2)'

  const labelColor = (fieldName: string) =>
    fieldErrors[fieldName] ? '#fca5a5' : 'inherit'

  return div.class`admin-crud-modal-backdrop`(
    div.class`admin-crud-modal`(
      div.style`display:flex;justify-content:space-between;gap:1em;align-items:flex-start;`(
        div(
          h3.style`margin:0;`(_ => isEditing ? 'Edit Rating' : 'Add Rating'),
          small.style`opacity:0.72;`('Create or update the public rating for this game.')
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
            value: editRating.gameId || '',
            games,
            isLoaded: isGamesLoaded,
            fieldError: fieldErrors.gameId,
            onChange: (gameId) => updateRating({ gameId }),
          }).key(`${isGamesLoaded ? 'loaded' : 'loading'}-${games.length}`),

        label.attr('style.color', _ => labelColor('rating'))('Rating'),
        input.type`number`.attr('min', '0').attr('max', '10').attr('step', '0.1').value(_ => editRating.rating ?? '').onInput((event: any) => {
          updateRating({ rating: optionalNumber(event?.target?.value) })
        }).attr('aria-invalid', _ => fieldErrors.rating ? 'true' : 'false').attr('title', _ => fieldErrors.rating || '').attr('style.borderColor', _ => invalidBorder('rating'))(),

        label('Review'),
        textarea.value(_ => editRating.review || '').onInput((event: any) => {
          updateRating({ review: event?.target?.value || '' })
        })(),

        label('Videos'),
        div.style`display:grid;gap:0.6em;`(
          _ => (editRating.videos || []).length
            ? (editRating.videos || []).map((video, index) =>
                div.style`display:grid;grid-template-columns:1fr 1fr auto;gap:0.5em;align-items:center;`(
                  input.type`url`.value(_ => video.url || '').attr('placeholder', 'Video URL').onInput((event: any) => {
                    updateVideo(index, { url: event?.target?.value || '' })
                  })(),
                  input.type`text`.value(_ => video.description || '').attr('placeholder', 'Description').onInput((event: any) => {
                    updateVideo(index, { description: event?.target?.value || '' })
                  })(),
                  button.type`button`.class`admin-secondary-button`.onClick(() => removeVideo(index))('Remove')
                )
              )
            : small.style`opacity:0.72;`('No videos linked.'),
          button.type`button`.class`admin-secondary-button`.onClick(addVideo)('Add Video')
        ),

        label('Visible on public page'),
        label.style`display:flex;gap:0.5em;align-items:center;`(
          input.type`checkbox`.attr('checked', _ => editRating.isVisible !== false ? 'checked' : null).onChange((event: any) => {
            updateRating({ isVisible: Boolean(event?.target?.checked) })
          })(),
          span(_ => editRating.isVisible !== false ? 'Visible' : 'Hidden')
        )
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

const findGameForRating = (
  rating: GameRating,
  games: Array<{ id: string } & Record<string, any>>
) => {
  const gameId = rating.gameId || rating.id
  return games.find((game) => game.id === gameId) || null
}

const cleanVideos = (videos: GameRatingInput['videos']) =>
  Array.isArray(videos)
    ? videos
        .map((video) => ({
          url: (video?.url || '').trim(),
          description: (video?.description || '').trim(),
        }))
        .filter((video) => video.url || video.description)
    : []

const optionalNumber = (value: any) => {
  if (value === '' || value === null || typeof value === 'undefined') return null
  const parsed = Number(value)
  return Number.isNaN(parsed) ? null : parsed
}
