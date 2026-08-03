export type GameTierInput = {
  id?: string
  shortName: string
  longName: string
  order?: number
}

export type GameTier = GameTierInput & {
  id: string
  createdAt?: any
  updatedAt?: any
}
