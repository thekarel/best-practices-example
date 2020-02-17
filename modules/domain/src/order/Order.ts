import {Cupcake} from '../cupcake/Cupcake'

export interface Order {
  id: string
  customerName: string
  deliveryAddress: string
  items: Cupcake[]
}
