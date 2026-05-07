import {
  a,
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
  subscribeWith,
  tag,
  ValueSubject,
} from 'taggedjs'
import { listenVisibleCurrentGames$ } from './firebase'
import { topNavBar } from './ui/topNav.tag'
import { publicNavButtons } from './ui/publicNavButtons.tag'
import type { CurrentGame } from './currentGames.types'

let lineupLoaded = false
let games$ = new ValueSubject<Array<{ id: string } & Record<string, any>> | null>(null)
let gamesUnsubscribe: (() => void) | null = null

export const currentLineupTag = tag(() => {
  const startLineupListener = () => {
    if (gamesUnsubscribe) {
      gamesUnsubscribe()
      gamesUnsubscribe = null
    }
    games$ = listenVisibleCurrentGames$()
    gamesUnsubscribe = (games$ as any)?.unsubscribe || null
  }

  if (!lineupLoaded) {
    lineupLoaded = true
    if (!gamesUnsubscribe) {
      startLineupListener()
    }
  }

  onDestroy(() => {
    if (gamesUnsubscribe) {
      gamesUnsubscribe()
      gamesUnsubscribe = null
    }
    lineupLoaded = false
  })

  return noElement(
    topNavBar(() => publicNavButtons()),
    style(`
      .lineup-page {
        min-height: 100vh;
        padding: 0 1em 3em;
        overflow: hidden;
      }

      .lineup-hero {
        width: min(1120px, 100%);
        margin: 0 auto;
        padding: 1.25em 0 0.5em;
        text-align: center;
      }

      .lineup-brand-strip {
        width: 100%;
        height: 150px;
        background-image: url('assets/media/youtube-channel-banner.jpg');
        background-size: contain;
        background-position: top center;
        background-repeat: repeat-x;
        border-bottom: 1px solid rgba(255,255,255,0.12);
      }

      .lineup-title {
        font-size: clamp(2em, 6vw, 4.6em);
        line-height: 1.04;
        margin: 0.18em 0 0.08em;
        background: linear-gradient(90deg, #ff0000, #ff7a00, #ffff00, #ff0000);
        background-size: 300% 300%;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        animation: lineup-title-glow 7s ease infinite;
        font-weight: 900;
        font-style: italic;
      }

      @keyframes lineup-title-glow {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
      }

      .lineup-subtitle {
        margin: 0 auto;
        max-width: 680px;
        color: rgba(255,255,255,0.82);
        font-weight: 700;
      }

      .lineup-grid {
        width: min(1120px, 100%);
        margin: 1.4em auto 0;
        display: grid;
        grid-template-columns: 1fr;
        gap: 1em;
      }

      .lineup-game-card {
        position: relative;
        min-height: 320px;
        overflow: hidden;
        border-radius: 18px;
        background: #070707;
        border: 1px solid rgba(255,255,255,0.12);
        box-shadow: 0 18px 48px rgba(0,0,0,0.36);
      }

      .lineup-game-card::before {
        content: '';
        position: absolute;
        inset: 0;
        background: linear-gradient(135deg, rgba(185,28,28,0.2), rgba(249,115,22,0.12), rgba(250,204,21,0.12));
        pointer-events: none;
        z-index: 1;
      }

      .lineup-game-card img {
        width: 100%;
        height: 100%;
        min-height: 320px;
        object-fit: cover;
        display: block;
        transform: scale(1.01);
        transition: transform 0.25s ease;
      }

      .lineup-game-card:hover img {
        transform: scale(1.05);
      }

      .lineup-placeholder {
        width: 100%;
        height: 100%;
        min-height: 320px;
        display: flex;
        align-items: center;
        justify-content: center;
        background:
          radial-gradient(circle at 30% 25%, rgba(250,204,21,0.35), transparent 28%),
          radial-gradient(circle at 72% 34%, rgba(239,68,68,0.34), transparent 24%),
          linear-gradient(145deg, #111, #250909 52%, #3a1c00);
      }

      .lineup-placeholder span {
        width: 118px;
        height: 118px;
        border-radius: 999px;
        border: 4px solid rgba(255,255,255,0.68);
        display: flex;
        align-items: center;
        justify-content: center;
        color: #facc15;
        font-weight: 900;
        letter-spacing: 0;
        box-shadow: 0 0 40px rgba(250,204,21,0.3);
      }

      .lineup-card-copy {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 2;
        padding: 3.4em 0.9em 0.9em;
        background: linear-gradient(to top, rgba(0,0,0,0.94), rgba(0,0,0,0.58), transparent);
      }

      .lineup-card-title {
        display: block;
        color: #fff;
        font-size: 1.1em;
        line-height: 1.08;
        text-shadow: 0 2px 12px rgba(0,0,0,0.8);
      }

      .lineup-card-date {
        display: block;
        margin-top: 0.25em;
        color: #f6c177;
        font-weight: 700;
      }

      .lineup-empty {
        width: min(680px, calc(100% - 2em));
        margin: 1.5em auto;
        padding: 1em;
        border-radius: 18px;
        border: 1px solid rgba(255,255,255,0.16);
        background: rgba(0,0,0,0.35);
        text-align: center;
      }

      @media (min-width: 680px) {
        .lineup-grid {
          grid-template-columns: repeat(2, 1fr);
        }
      }

      @media (min-width: 980px) {
        .lineup-grid {
          grid-template-columns: repeat(3, 1fr);
        }
      }

      @media (min-width: 1280px) {
        .lineup-grid {
          grid-template-columns: repeat(4, 1fr);
        }
      }

      @media (max-width: 520px) {
        .lineup-brand-strip {
          height: 96px;
        }
        .lineup-page {
          padding-left: 0.65em;
          padding-right: 0.65em;
        }
        .lineup-game-card,
        .lineup-game-card img,
        .lineup-placeholder {
          min-height: 280px;
        }
      }
    `),
    div.class`lineup-page`(
      div.class`lineup-brand-strip`(),
      div.class`lineup-hero`(
        h2.class`lineup-title`("Cary's Current Lineup"),
        p.class`lineup-subtitle`('A list of my current games.'),
        div.style`margin-top:0.9em;`(
          a.href`/index.html`.class`top-nav-pill`('Back Home')
        )
      ),
      subscribeWith(games$, null, (items) => {
        if (items === null) {
          return div.class`lineup-results`.key('lineup-loading')(
            div.class`lineup-empty`('Loading current lineup...')
          )
        }

        const visibleGames = items.filter((game) => game.isVisible !== false)
        console.debug('Visible current lineup games', {
          count: visibleGames.length,
          games: visibleGames,
        })

        return visibleGames.length
          ? div.class`lineup-results`.key('lineup-grid-results')(
              div.class`lineup-grid`(
                visibleGames.map((game) => lineupGameCard(game as CurrentGame).key(game.id))
              )
            )
          : div.class`lineup-results`.key('lineup-empty-results')(
              div.class`lineup-empty`('No current lineup games are visible yet.')
            )
      })
    )
  )
})

const lineupGameCard = tag((game: CurrentGame) => {
  lineupGameCard.inputs(([nextGame]) => {
    game = nextGame
  })

  return div.class`lineup-game-card bounce-in`(
    game.imageUrl
      ? img.src`${game.imageUrl}`.attr('alt', game.title || 'Pinball game')
      : div.class`lineup-placeholder`(span('PB')),
    div.class`lineup-card-copy`(
      strong.class`lineup-card-title`(game.title || 'Untitled Game'),
      small.class`lineup-card-date`('Added ', formatDate(game.dateAddedToCollection))
    )
  )
})

const dateInputValue = (value: any) => {
  if (!value) return ''
  if (typeof value === 'string') return value.slice(0, 10)
  if (typeof value.toDate === 'function') return value.toDate().toISOString().slice(0, 10)
  if (value.seconds) return new Date(value.seconds * 1000).toISOString().slice(0, 10)
  return ''
}

const formatDate = (value: any) => {
  const dateValue = dateInputValue(value)
  if (!dateValue) return 'recently'
  const date = new Date(`${dateValue}T12:00:00`)
  return Number.isNaN(date.getTime())
    ? dateValue
    : date.toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' })
}
