import {
  callback,
  div,
  h2,
  hr,
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
import { listenGames$, listenGameTiers$, listenVisibleCurrentGames$, listenVisiblePastOwnedGames$ } from './firebase'
import { topNavBar } from './ui/topNav.tag'
import { publicNavButtons } from './ui/publicNavButtons.tag'
import { publicFooter } from './ui/publicFooter.tag'
import type { CurrentGame } from './currentGames.types'
import type { PastOwnedGame } from './pastOwnedGames.types'
import type { GameTier } from './gameTiers.types'

let lineupLoaded = false
let gamesUnsubscribe: (() => void) | null = null
let gamesValueUnsubscribe: (() => void) | null = null
let pastGamesUnsubscribe: (() => void) | null = null
let pastGamesValueUnsubscribe: (() => void) | null = null
let gameLibraryUnsubscribe: (() => void) | null = null
let gameLibraryValueUnsubscribe: (() => void) | null = null
let gameTiersUnsubscribe: (() => void) | null = null
let gameTiersValueUnsubscribe: (() => void) | null = null

export const currentLineupTag = tag((
  lineupItems = null as Array<{ id: string } & Record<string, any>> | null,
  pastOwnedItems = null as Array<{ id: string } & Record<string, any>> | null,
  gameLibrary = null as Array<{ id: string } & Record<string, any>> | null,
  gameTiers = null as GameTier[] | null,
  refreshLineup = callback(() => {})
) => {
  const startLineupListener = () => {
    if (gamesUnsubscribe) {
      gamesUnsubscribe()
      gamesUnsubscribe = null
    }
    if (gamesValueUnsubscribe) {
      gamesValueUnsubscribe()
      gamesValueUnsubscribe = null
    }
    if (pastGamesUnsubscribe) {
      pastGamesUnsubscribe()
      pastGamesUnsubscribe = null
    }
    if (pastGamesValueUnsubscribe) {
      pastGamesValueUnsubscribe()
      pastGamesValueUnsubscribe = null
    }
    if (gameLibraryUnsubscribe) {
      gameLibraryUnsubscribe()
      gameLibraryUnsubscribe = null
    }
    if (gameLibraryValueUnsubscribe) {
      gameLibraryValueUnsubscribe()
      gameLibraryValueUnsubscribe = null
    }
    if (gameTiersUnsubscribe) {
      gameTiersUnsubscribe()
      gameTiersUnsubscribe = null
    }
    if (gameTiersValueUnsubscribe) {
      gameTiersValueUnsubscribe()
      gameTiersValueUnsubscribe = null
    }

    const liveGames$ = listenVisibleCurrentGames$()
    gamesUnsubscribe = (liveGames$ as any)?.unsubscribe || null
    const valueSubscription = liveGames$.subscribe((items) => {
      lineupItems = items
      console.debug('Visible current lineup games', {
        count: items?.length || 0,
        games: items,
      })
      refreshLineup()
    })
    gamesValueUnsubscribe = () => valueSubscription.unsubscribe()

    const pastGames$ = listenVisiblePastOwnedGames$()
    pastGamesUnsubscribe = (pastGames$ as any)?.unsubscribe || null
    const pastGamesSubscription = pastGames$.subscribe((items) => {
      pastOwnedItems = items
      console.debug('Visible past owned games', {
        count: items?.length || 0,
        games: items,
      })
      refreshLineup()
    })
    pastGamesValueUnsubscribe = () => pastGamesSubscription.unsubscribe()

    const libraryGames$ = listenGames$()
    gameLibraryUnsubscribe = (libraryGames$ as any)?.unsubscribe || null
    const librarySubscription = libraryGames$.subscribe((items) => {
      gameLibrary = items
      console.debug('Current lineup game library', {
        count: items?.length || 0,
        games: items,
      })
      refreshLineup()
    })
    gameLibraryValueUnsubscribe = () => librarySubscription.unsubscribe()

    const tiers$ = listenGameTiers$()
    gameTiersUnsubscribe = (tiers$ as any)?.unsubscribe || null
    const tiersSubscription = tiers$.subscribe((items) => {
      if (!Array.isArray(items)) return
      gameTiers = items as GameTier[]
      refreshLineup()
    })
    gameTiersValueUnsubscribe = () => tiersSubscription.unsubscribe()
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
    if (gamesValueUnsubscribe) {
      gamesValueUnsubscribe()
      gamesValueUnsubscribe = null
    }
    if (pastGamesUnsubscribe) {
      pastGamesUnsubscribe()
      pastGamesUnsubscribe = null
    }
    if (pastGamesValueUnsubscribe) {
      pastGamesValueUnsubscribe()
      pastGamesValueUnsubscribe = null
    }
    if (gameLibraryUnsubscribe) {
      gameLibraryUnsubscribe()
      gameLibraryUnsubscribe = null
    }
    if (gameLibraryValueUnsubscribe) {
      gameLibraryValueUnsubscribe()
      gameLibraryValueUnsubscribe = null
    }
    if (gameTiersUnsubscribe) {
      gameTiersUnsubscribe()
      gameTiersUnsubscribe = null
    }
    if (gameTiersValueUnsubscribe) {
      gameTiersValueUnsubscribe()
      gameTiersValueUnsubscribe = null
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
        gap: 1.4em 1em;
      }

      .lineup-game-item {
        display: grid;
        gap: 0.75em;
        margin-bottom: 1.7em;
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
        margin: 0;
        color: #f6c177;
        font-weight: 700;
        line-height: 1.25;
        text-align: center;
      }

      .lineup-card-date .lineup-tier-detail {
        color: #fff;
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

      .lineup-section-break {
        width: min(1120px, 100%);
        margin: 2.4em auto 1.4em;
        border: 0;
        border-top: 1px solid rgba(255,255,255,0.22);
      }

      .lineup-section-title {
        width: min(1120px, 100%);
        margin: 0 auto;
        color: #fff;
        font-size: clamp(1.5em, 4vw, 2.6em);
        line-height: 1.08;
        font-weight: 900;
        font-style: italic;
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
        p.class`lineup-subtitle`('A list of my current games.')
      ),
      _ => {
        if (lineupItems === null || gameLibrary === null || gameTiers === null) {
          return div.class`lineup-results`(
            div.class`lineup-empty`('Loading current lineup...')
          )
        }
        const availableGameTiers = gameTiers

        const visibleGames = lineupItems
          .filter((game) => game.isVisible !== false)
          .map((game) => resolveLineupGame(game as CurrentGame, gameLibrary || []))

        return visibleGames.length
          ? div.class`lineup-results`(
              div.class`lineup-grid`(
                visibleGames.map((game) => lineupGameCard({
                  game: game as CurrentGame,
                  detail: [
                    gameTierLabel(game.tierId, availableGameTiers)
                      ? span.class`lineup-tier-detail`(gameTierLabel(game.tierId, availableGameTiers))
                      : '',
                    `Collected ${formatDate(game.dateAddedToCollection)}`,
                    formatCurrentYearsOwned(game as CurrentGame),
                  ].filter(Boolean),
                }).key(game.id))
              )
            )
          : div.class`lineup-results`(
              div.class`lineup-empty`('No current lineup games are visible yet.')
            )
      },
      hr.class`lineup-section-break`(),
      h2.class`lineup-section-title`('Past Games Owned'),
      _ => {
        if (pastOwnedItems === null || gameLibrary === null || gameTiers === null) {
          return div.class`lineup-results`(
            div.class`lineup-empty`('Loading past games...')
          )
        }
        const availableGameTiers = gameTiers

        const visiblePastGames = pastOwnedItems
          .filter((game) => game.isVisible !== false)
          .sort(comparePastOwnedGamesByGameId)
          .map((game) => resolvePastOwnedGame(game as PastOwnedGame, gameLibrary || []))

        return visiblePastGames.length
          ? div.class`lineup-results`(
              div.class`lineup-grid`(
                visiblePastGames.map((game) => lineupGameCard({
                  game,
                  detail: [
                    gameTierLabel(game.tierId, availableGameTiers)
                      ? span.class`lineup-tier-detail`(gameTierLabel(game.tierId, availableGameTiers))
                      : '',
                    formatYearsOwned(game),
                  ].filter(Boolean),
                }).key(`past-${game.id}`))
              )
            )
          : div.class`lineup-results`(
              div.class`lineup-empty`('No past owned games are visible yet.')
            )
      }
    ),
    publicFooter()
  )
})

const resolveLineupGame = (
  lineupGame: CurrentGame,
  gameLibrary: Array<{ id: string } & Record<string, any>>
) => {
  const libraryGame = findGameById(gameLibrary, lineupGame.gameId)
  return {
    ...lineupGame,
    title: libraryGame?.title || lineupGame.title || '',
    imageUrl: bestGameImageUrl(libraryGame, lineupGame),
    manufacturer: libraryGame?.manufacturer || lineupGame.manufacturer || '',
    yearReleased: libraryGame?.yearReleased ?? lineupGame.yearReleased ?? null,
  } as CurrentGame
}

const gameTierLabel = (tierId: string | undefined, gameTiers: GameTier[]) => {
  if (!tierId) return ''
  const tier = gameTiers.find((item) => item.id === tierId)
  if (!tier) return ''
  return tier.longName || tier.shortName || ''
}

const comparePastOwnedGamesByGameId = (
  a: { id?: string; gameId?: string },
  b: { id?: string; gameId?: string }
) => {
  const gameIdCompare = String(a.gameId || '').localeCompare(String(b.gameId || ''), undefined, { sensitivity: 'base' })
  return gameIdCompare || String(a.id || '').localeCompare(String(b.id || ''), undefined, { sensitivity: 'base' })
}

const resolvePastOwnedGame = (
  pastOwnedGame: PastOwnedGame,
  gameLibrary: Array<{ id: string } & Record<string, any>>
) => {
  const libraryGame = findGameByPastOwnedGame(gameLibrary, pastOwnedGame)
  const fallbackTitle = readableGameIdTitle(pastOwnedGame.gameId || pastOwnedGame.id)
  return {
    ...pastOwnedGame,
    title: libraryGame?.title || pastOwnedGame.title || pastOwnedGame.sourceTitle || fallbackTitle,
    imageUrl: bestGameImageUrl(libraryGame, pastOwnedGame),
    manufacturer: libraryGame?.manufacturer || pastOwnedGame.manufacturer || '',
    yearReleased: libraryGame?.yearReleased ?? pastOwnedGame.yearReleased ?? null,
  } as PastOwnedGame
}

const findGameByPastOwnedGame = (
  gameLibrary: Array<{ id: string } & Record<string, any>>,
  pastOwnedGame: PastOwnedGame
) =>
  findGameById(gameLibrary, pastOwnedGame.gameId)
    || findGameById(gameLibrary, pastOwnedGame.title)
    || findGameById(gameLibrary, pastOwnedGame.sourceTitle)
    || findGameById(gameLibrary, readableGameIdTitle(pastOwnedGame.gameId || pastOwnedGame.id))
    || null

const findGameById = (
  gameLibrary: Array<{ id: string } & Record<string, any>>,
  gameId: any
) => {
  const normalizedGameId = normalizeId(gameId)
  const sluggedGameId = slugifyGameId(gameId)
  if (!normalizedGameId) return null

  return gameLibrary.find((game) => game.id === gameId)
    || gameLibrary.find((game) => normalizeId(game.id) === normalizedGameId)
    || gameLibrary.find((game) => slugifyGameId(game.id) === sluggedGameId)
    || gameLibrary.find((game) => slugifyGameId(game.title) === sluggedGameId)
    || null
}

const normalizeId = (value: any) =>
  String(value || '').trim().toLowerCase()

const slugifyGameId = (value: any) =>
  normalizeId(value)
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

const readableGameIdTitle = (value: any) =>
  String(value || '')
    .trim()
    .replace(/[-_]+/g, ' ')
    .replace(/\s+/g, ' ')
    .replace(/\b\w/g, (letter) => letter.toUpperCase())

const lineupGameCard = tag(({
  game,
  detail,
}: {
  game: CurrentGame | PastOwnedGame
  detail: any | any[]
}) => {
  lineupGameCard.inputs((args) => {
    ;[{ game, detail }] = args
  })

  return div.class`lineup-game-item bounce-in`(
    div.class`lineup-game-card`(
      _ => game.imageUrl
        ? img.src`${game.imageUrl}`.attr('alt', game.title || 'Pinball game')
        : div.class`lineup-placeholder`(span(gameInitials(game.title))),
      div.class`lineup-card-copy`(
        strong.class`lineup-card-title`(_ => game.title || 'Untitled Game')
      )
    ),
    small.class`lineup-card-date`(
      _ => Array.isArray(detail)
        ? detail.map((line) => div(line))
        : detail
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

const formatYearsOwned = (game: PastOwnedGame) => {
  const start = parseDateValue(game.dateAddedToCollection)
  const end = parseDateValue(game.dateRemovedFromCollection)

  if (!start || !end) {
    return 'Time not recorded'
  }

  const years = Math.max(0, (end.getTime() - start.getTime()) / (365.2425 * 24 * 60 * 60 * 1000))
  const wholeYears = Math.floor(years)

  if (wholeYears >= 1) {
    return `${wholeYears} year${wholeYears === 1 ? '' : 's'} owned`
  }

  const months = Math.max(1, Math.round(years * 12))
  return `${months} month${months === 1 ? '' : 's'} owned`
}

const formatCurrentYearsOwned = (game: CurrentGame) => {
  const start = parseDateValue(game.dateAddedToCollection)
  if (!start) return 'Ownership date unknown'

  const years = Math.max(0, (Date.now() - start.getTime()) / (365.2425 * 24 * 60 * 60 * 1000))
  if (years < 1) return 'first year owned'

  const wholeYears = Math.floor(years)
  return `${wholeYears} year${wholeYears === 1 ? '' : 's'} owned`
}

const gameInitials = (title: any) => {
  const words = String(title || '')
    .trim()
    .split(/\s+/)
    .filter(Boolean)

  if (words.length >= 2) {
    return `${words[0][0]}${words[1][0]}`.toUpperCase()
  }

  return (words[0] || 'PB').slice(0, 2).toUpperCase()
}

const parseDateValue = (value: any) => {
  const dateValue = dateInputValue(value)
  if (!dateValue) return null
  const date = new Date(`${dateValue}T12:00:00`)
  return Number.isNaN(date.getTime()) ? null : date
}
