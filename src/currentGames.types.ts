export type CurrentGameInput = {
  id?: string
  title: string
  dateAddedToCollection: string
  imageUrl?: string
  manufacturer?: string
  yearReleased?: number | null
  notes?: string
  isVisible: boolean
}

export type CurrentGame = CurrentGameInput & {
  id: string
  createdAt?: any
  updatedAt?: any
}
