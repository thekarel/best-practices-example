import {Order} from '@cupcake/domain'

export interface OrderRepository {
  save(order: Order): Promise<void>
  load(id: string): Promise<Order | undefined>
}
