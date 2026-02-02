export type MoneyCents = number

export type FirestoreTimestamp =
  | import("firebase/firestore").Timestamp
  | import("firebase/firestore").FieldValue

export interface UserDoc {
  id: string
  email: string
  firstName: string
  lastName: string
  userType: string
  createdAt: FirestoreTimestamp
  updatedAt: FirestoreTimestamp
}

export interface OrderLineItem {
  id: string
  name: string
  quantity: number
  unitAmountCents: MoneyCents
  lineAmountCents: MoneyCents
}

export interface OrderDoc {
  id: string
  buyerId: string
  totalAmountCents: MoneyCents
  lineItems: OrderLineItem[]
  createdAt: FirestoreTimestamp
  updatedAt: FirestoreTimestamp
}

export type UserProfileInput = Pick<UserDoc, "id" | "email" | "firstName" | "lastName"> & {
  userType?: string
}
export type NewOrderInput = Omit<OrderDoc, "id" | "createdAt" | "updatedAt">
