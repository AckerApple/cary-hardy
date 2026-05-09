import {
  a,
  callback,
  div,
  h2,
  img,
  noElement,
  onDestroy,
  p,
  small,
  span,
  strong,
  style,
  tag,
} from 'taggedjs'
import { listenGames$, listenVisibleGameRatings$ } from './firebase'
import { publicNavButtons } from './ui/publicNavButtons.tag'
import { topNavBar } from './ui/topNav.tag'
import type { GameRating } from './gameRatings.types'

let ratingsLoaded = false
let ratingsUnsubscribe: (() => void) | null = null
let ratingsValueUnsubscribe: (() => void) | null = null
let gamesUnsubscribe: (() => void) | null = null
let gamesValueUnsubscribe: (() => void) | null = null

export const gameRatingsTag = tag((
  ratings = null as Array<{ id: string } & Record<string, any>> | null,
  games = null as Array<{ id: string } & Record<string, any>> | null,
  refreshRatings = callback(() => {})
) => {
  const startRatingsListener = () => {
    if (ratingsUnsubscribe) ratingsUnsubscribe()
    if (ratingsValueUnsubscribe) ratingsValueUnsubscribe()
    if (gamesUnsubscribe) gamesUnsubscribe()
    if (gamesValueUnsubscribe) gamesValueUnsubscribe()

    const ratings$ = listenVisibleGameRatings$()
    ratingsUnsubscribe = (ratings$ as any)?.unsubscribe || null
    const ratingsSubscription = ratings$.subscribe((items) => {
      ratings = items
      console.debug('Visible game ratings', {
        count: items?.length || 0,
        ratings: items,
      })
      refreshRatings()
    })
    ratingsValueUnsubscribe = () => ratingsSubscription.unsubscribe()

    const games$ = listenGames$()
    gamesUnsubscribe = (games$ as any)?.unsubscribe || null
    const gamesSubscription = games$.subscribe((items) => {
      games = items
      console.debug('Game ratings library', {
        count: items?.length || 0,
        games: items,
      })
      refreshRatings()
    })
    gamesValueUnsubscribe = () => gamesSubscription.unsubscribe()
  }

  if (!ratingsLoaded) {
    ratingsLoaded = true
    if (!ratingsUnsubscribe) startRatingsListener()
  }

  onDestroy(() => {
    if (ratingsUnsubscribe) ratingsUnsubscribe()
    if (ratingsValueUnsubscribe) ratingsValueUnsubscribe()
    if (gamesUnsubscribe) gamesUnsubscribe()
    if (gamesValueUnsubscribe) gamesValueUnsubscribe()
    ratingsUnsubscribe = null
    ratingsValueUnsubscribe = null
    gamesUnsubscribe = null
    gamesValueUnsubscribe = null
    ratingsLoaded = false
  })

  return noElement(
    topNavBar(() => publicNavButtons()),
    style(`
      .ratings-page {
        min-height: 100vh;
        padding: 0 1em 3em;
        overflow: hidden;
      }

      .ratings-hero {
        width: min(1120px, 100%);
        margin: 0 auto;
        padding: 1.25em 0 0.5em;
        text-align: center;
      }

      .ratings-brand-strip {
        width: 100%;
        height: 150px;
        background-image: url('assets/media/youtube-channel-banner.jpg');
        background-size: contain;
        background-position: top center;
        background-repeat: repeat-x;
        border-bottom: 1px solid rgba(255,255,255,0.12);
      }

      .ratings-title {
        font-size: clamp(2em, 6vw, 4.6em);
        line-height: 1.04;
        margin: 0.18em 0 0.08em;
        background: linear-gradient(90deg, #ff0000, #ff7a00, #ffff00, #ff0000);
        background-size: 300% 300%;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        animation: ratings-title-glow 7s ease infinite;
        font-weight: 900;
        font-style: italic;
      }

      @keyframes ratings-title-glow {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
      }

      .ratings-subtitle {
        margin: 0 auto;
        max-width: 680px;
        color: rgba(255,255,255,0.82);
        font-weight: 700;
      }

      .ratings-grid {
        width: min(1120px, 100%);
        margin: 1.4em auto 0;
        display: grid;
        grid-template-columns: 1fr;
        gap: 1em;
      }

      .rating-card {
        overflow: hidden;
        border-radius: 18px;
        background: #090909;
        border: 1px solid rgba(255,255,255,0.12);
        box-shadow: 0 18px 48px rgba(0,0,0,0.36);
        display: grid;
      }

      .rating-card-media {
        min-height: 260px;
        background:
          radial-gradient(circle at 30% 25%, rgba(250,204,21,0.35), transparent 28%),
          radial-gradient(circle at 72% 34%, rgba(239,68,68,0.34), transparent 24%),
          linear-gradient(145deg, #111, #250909 52%, #3a1c00);
      }

      .rating-card-media img {
        width: 100%;
        height: 100%;
        min-height: 260px;
        object-fit: cover;
        display: block;
      }

      .rating-card-placeholder {
        min-height: 260px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #facc15;
        font-weight: 900;
        font-size: 2em;
      }

      .rating-card-copy {
        padding: 0.9em;
        display: grid;
        gap: 0.45em;
      }

      .rating-card-title {
        color: #fff;
        font-size: 1.2em;
        line-height: 1.1;
      }

      .rating-score {
        color: #f6c177;
        font-size: 1.15em;
        font-weight: 900;
      }

      .rating-review {
        margin: 0;
        color: rgba(255,255,255,0.82);
        line-height: 1.42;
      }

      .rating-videos {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5em;
        margin-top: 0.25em;
      }

      .rating-video-link {
        border: 1px solid rgba(255,255,255,0.22);
        border-radius: 999px;
        color: #fff;
        padding: 0.45em 0.7em;
        text-decoration: none;
        font-weight: 800;
        background: rgba(0,0,0,0.32);
      }

      .ratings-empty {
        width: min(680px, calc(100% - 2em));
        margin: 1.5em auto;
        padding: 1em;
        border-radius: 18px;
        border: 1px solid rgba(255,255,255,0.16);
        background: rgba(0,0,0,0.35);
        text-align: center;
      }

      @media (min-width: 760px) {
        .ratings-grid {
          grid-template-columns: repeat(2, 1fr);
        }
      }

      @media (min-width: 1120px) {
        .ratings-grid {
          grid-template-columns: repeat(3, 1fr);
        }
      }

      @media (max-width: 520px) {
        .ratings-brand-strip {
          height: 96px;
        }
        .ratings-page {
          padding-left: 0.65em;
          padding-right: 0.65em;
        }
      }
    `),
    div.class`ratings-page`(
      div.class`ratings-brand-strip`(),
      div.class`ratings-hero`(
        h2.class`ratings-title`("Cary's Game Ratings"),
        p.class`ratings-subtitle`('Rated games from the collection.'),
        div.style`margin-top:0.9em;`(
          a.href`/index.html`.class`top-nav-pill`('Back Home')
        )
      ),
      _ => {
        if (ratings === null || games === null) {
          return div.class`ratings-empty`('Loading game ratings...')
        }

        const visibleRatings = ratings
          .filter((rating) => rating.isVisible !== false)
          .map((rating) => resolveRating(rating as GameRating, games || []))
          .filter((rating) => rating.game)

        return visibleRatings.length
          ? div.class`ratings-grid`(
              visibleRatings.map((rating) => ratingCard(rating).key(rating.id))
            )
          : div.class`ratings-empty`('No public game ratings are visible yet.')
      }
    )
  )
})

const resolveRating = (
  rating: GameRating,
  games: Array<{ id: string } & Record<string, any>>
) => ({
  ...rating,
  game: games.find((game) => game.id === rating.gameId),
})

const ratingCard = tag((rating: GameRating & { game?: Record<string, any> }) => {
  ratingCard.inputs(([nextRating]) => {
    rating = nextRating
  })

  const game = rating.game || {}

  return div.class`rating-card bounce-in`(
    div.class`rating-card-media`(
      game.imageUrl
        ? img.src`${game.imageUrl}`.attr('alt', game.title || 'Pinball game')
        : div.class`rating-card-placeholder`('PB')
    ),
    div.class`rating-card-copy`(
      strong.class`rating-card-title`(game.title || 'Untitled game'),
      small([
        game.manufacturer || '',
        game.yearReleased ? String(game.yearReleased) : '',
      ].filter(Boolean).join(' - ') || 'No manufacturer/year'),
      span.class`rating-score`(formatRating(rating.rating)),
      rating.review ? p.class`rating-review`(rating.review) : '',
      ratingVideos(rating)
    )
  )
})

const ratingVideos = (rating: GameRating) => {
  const videos = Array.isArray(rating.videos)
    ? rating.videos.filter((video) => video?.url)
    : []

  return videos.length
    ? div.class`rating-videos`(
        videos.map((video) =>
          a.href`${video.url}`.class`rating-video-link`.attr('target', '_blank').attr('rel', 'noopener noreferrer')(
            video.description || 'Watch video'
          )
        )
      )
    : ''
}

const formatRating = (rating: number | null | undefined) =>
  typeof rating === 'number' && !Number.isNaN(rating)
    ? `${rating}/10`
    : 'Not rated'
