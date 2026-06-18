# Cary Hardy Website

## TaggedJS Rendering Notes

TaggedJS only re-evaluates dynamic child branches when they are written as callback functions. This matters when a component renders data that is joined from multiple async resources, such as `pastOwnedGames` plus the canonical `games` collection.

Use callback branches for values that can change after the first render:

```ts
_ => game.imageUrl
  ? img.src`${game.imageUrl}`.attr('alt', game.title || 'Pinball game')
  : div.class`lineup-placeholder`(span(gameInitials(game.title)))
```

Avoid a bare conditional when the condition depends on async-loaded or joined data:

```ts
game.imageUrl
  ? img.src`${game.imageUrl}`()
  : div()
```

The bare conditional can render from the first incomplete data shape and fail to update when the joined data arrives later. This showed up on the public games page where past-owned records loaded separately from the games library; `game.imageUrl` became available only after the join completed.

For joined public views, also prefer waiting for all required snapshots before rendering cards. The ratings page uses explicit snapshot-loaded flags; the public lineup page waits for the games library before rendering current and past game cards.
