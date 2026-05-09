export type ManufacturerInput = {
  id?: string
  name: string
  logoUrl?: string
  opinions?: string
}

export type Manufacturer = ManufacturerInput & {
  id: string
  createdAt?: any
  updatedAt?: any
}
