export type PastOwnedGameInput = {
  id?: string
  gameId?: string
  tierId?: string
  title?: string
  dateAddedToCollection?: string
  dateRemovedFromCollection?: string
  imageUrl?: string
  manufacturer?: string
  yearReleased?: number | null
  notes?: string
  isVisible: boolean
  pinsideUrl?: string
  pinsideId?: string
  sourceTitle?: string
  source?: string
}

export type PastOwnedGame = PastOwnedGameInput & {
  id: string
  isMissingGame?: boolean
  createdAt?: any
  updatedAt?: any
}

export type PinsideHistoryGame = {
  title: string
  dateAddedToCollection?: string
  dateRemovedFromCollection?: string
  pinsideUrl?: string
  pinsideId?: string
  imageUrl?: string
  manufacturer?: string
  yearReleased?: number | null
}
