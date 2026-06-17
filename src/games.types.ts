export type GameInput = {
  id?: string
  title: string
  manufacturerId?: string
  imageUrl?: string
  manufacturer?: string
  yearReleased?: number | null
  notes?: string
  dataLinks?: Array<{
    title: string
    url: string
  }>
}

export type Game = GameInput & {
  id: string
  createdAt?: any
  updatedAt?: any
}
