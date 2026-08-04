import { div, input, label, noElement, option, output, select, small, span, tag } from 'taggedjs'
import type { GameTier } from '../gameTiers.types'

type GameOption = { id: string } & Record<string, any>

export const availableGameTiers = (
  gameId: string,
  games: GameOption[],
  gameTiers: GameTier[]
) => {
  const game = games.find((item) => item.id === gameId)
  const tierIds = Array.isArray(game?.tierIds) ? game.tierIds : []
  return tierIds
    .map((tierId: string) => gameTiers.find((tier) => tier.id === tierId))
    .filter(Boolean) as GameTier[]
}

export const gameTierField = tag(({
  gameId,
  tierId,
  games,
  gameTiers,
  isLoaded,
  fieldError,
  radioName = 'game-tier',
  onChange,
}: {
  gameId: string
  tierId: string
  games: GameOption[]
  gameTiers: GameTier[]
  isLoaded: boolean
  fieldError?: string
  radioName?: string
  onChange: (tierId: string) => void
}) => {
  gameTierField.inputs((args) => {
    ;[{
      gameId,
      tierId,
      games,
      gameTiers,
      isLoaded,
      fieldError,
      radioName = 'game-tier',
      onChange,
    }] = args
    onChange = output(onChange)
  })

  return noElement(
    label.style`text-align:left;justify-self:start;`.attr('style.color', _ => fieldError ? '#fca5a5' : 'inherit')('Game Tier'),
    _ => {
      const assignedTiers = availableGameTiers(gameId, games, gameTiers)
      return div.style`text-align:left;justify-self:stretch;width:100%;`(
        assignedTiers.length
          ? div.style`display:grid;gap:0.45em;text-align:left;`(
              assignedTiers.map((tier) => label.style`display:flex;gap:0.5em;align-items:center;text-align:left;justify-content:flex-start;`(
                input.type`radio`.attr('name', radioName).value`${tier.id}`
                  .attr('checked', _ => tierId === tier.id ? 'checked' : null)
                  .onChange(() => onChange(tier.id))(),
                span(`${tier.shortName} — ${tier.longName}`)
              ).key(tier.id))
            )
          : !isLoaded
            ? small.style`opacity:0.72;`('Loading game tiers...')
            : gameId
              ? select.style`text-align:left;width:100%;`.value(_ => tierId || '').onChange((event: any) => {
                  onChange(event?.target?.value || '')
                }).attr('aria-invalid', _ => fieldError ? 'true' : 'false').attr('title', _ => fieldError || '')(
                  [
                    option.value``(gameTiers.length ? 'Select a game tier' : 'No game tiers available'),
                    ...gameTiers.map((tier) => option.value`${tier.id}`(`${tier.shortName} — ${tier.longName}`)),
                  ]
                )
              : small.style`opacity:0.72;`('Select a game first.')
      )
    }
  )
})
