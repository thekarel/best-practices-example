import {Cupcake} from '@cupcake/domain'

export interface CreateOrderPayload {
  customerName: string
  deliveryAddress: string
  items: Cupcake[]
}
