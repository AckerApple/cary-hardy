import { a, div, option, optgroup, output, select, tag } from 'taggedjs'

type GameOption = { id: string } & Record<string, any>

export const groupedGameSelect = tag(({
  value,
  games,
  isLoaded,
  fieldError,
  onChange,
}: {
  value: string
  games: GameOption[]
  isLoaded: boolean
  fieldError?: string
  onChange: (gameId: string) => void
}) => {
  groupedGameSelect.inputs((args) => {
    ;[{
      value,
      games,
      isLoaded,
      fieldError,
      onChange,
    }] = args
    onChange = output(onChange)
  })

  const invalidBorder = () => fieldError ? '#f87171' : 'rgba(255,255,255,0.2)'

  return div.class`admin-field-with-link`(
    select.value(_ => value || '').onChange((event: any) => {
      onChange(event?.target?.value || '')
    }).attr('aria-invalid', _ => fieldError ? 'true' : 'false').attr('title', _ => fieldError || '').attr('style.borderColor', _ => invalidBorder())(
      _ => gameSelectOptions(value, games, isLoaded)
    ),
    a.href`/admin/games.html`.class`admin-inline-edit-link`('edit games')
  )
})

const gameSelectOptions = (
  selectedGameId: string,
  games: GameOption[],
  isLoaded: boolean
) => {
  const groups = groupGamesByManufacturer(games)
  const selectedGameExists = !selectedGameId || games.some((game) => game.id === selectedGameId)

  return [
    option.value``(_=> selectPlaceholder(games, isLoaded)),
    !selectedGameExists
      ? option.value`${selectedGameId}`(`Missing game: ${selectedGameId}`)
      : '',
    groups.map(({ manufacturer, items }) =>
      optgroup.label(manufacturer)(
        items.map((game) => option.value`${game.id}`(gameMachineLabel(game)))
      )
    ),
  ]
}

const selectPlaceholder = (games: GameOption[], isLoaded: boolean) => {
  if (!isLoaded) return 'Loading games...'
  return games.length ? 'Select a game' : 'Add games first'
}

const groupGamesByManufacturer = (games: GameOption[]) => {
  const groups = new Map<string, GameOption[]>()
  games.forEach((game) => {
    const manufacturer = String(game.manufacturer || 'Unknown Manufacturer').trim() || 'Unknown Manufacturer'
    groups.set(manufacturer, [...(groups.get(manufacturer) || []), game])
  })

  return [...groups.entries()]
    .sort(([a], [b]) => a.localeCompare(b, undefined, { sensitivity: 'base' }))
    .map(([manufacturer, items]) => ({
      manufacturer,
      items: [...items].sort((a, b) =>
        String(a.title || '').localeCompare(String(b.title || ''), undefined, { sensitivity: 'base' })
      ),
    }))
}

const gameMachineLabel = (game: GameOption) =>
  [
    game.title || 'Untitled game',
    game.yearReleased ? String(game.yearReleased) : '',
  ].filter(Boolean).join(' - ')
