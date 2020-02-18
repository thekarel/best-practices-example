export type Maybe<T> = T | null
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
}

export type Cupcake = {
  __typename?: 'Cupcake'
  kind: Kind
  features: Array<Feature>
  name: Scalars['String']
}

export type CupcakeInput = {
  kind: Kind
  features: Array<Feature>
  name: Scalars['String']
}

export enum Feature {
  sugarFree = 'sugarFree',
  vegan = 'vegan',
  exclusive = 'exclusive',
}

export enum Kind {
  sweet = 'sweet',
  savoury = 'savoury',
}

export type Mutation = {
  __typename?: 'Mutation'
  createOrder: Order
}

export type MutationCreateOrderArgs = {
  items: Array<CupcakeInput>
  deliveryAddress: Scalars['String']
  customerName: Scalars['String']
}

export type Order = {
  __typename?: 'Order'
  id: Scalars['ID']
  customerName: Scalars['String']
  deliveryAddress: Scalars['String']
  items: Array<Cupcake>
}

export type Query = {
  __typename?: 'Query'
  orders: Array<Order>
  order?: Maybe<Order>
}

export type QueryOrderArgs = {
  id: Scalars['String']
}
