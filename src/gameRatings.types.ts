export type GameRatingInput = {
  id?: string
  gameId: string
  rating: number | null
  review?: string
  videos?: Array<{
    url: string
    description: string
  }>
  isVisible: boolean
}

export type GameRating = GameRatingInput & {
  id: string
  createdAt?: any
  updatedAt?: any
}
