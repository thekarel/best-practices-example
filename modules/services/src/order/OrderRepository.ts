import {Order} from '@cupcake/domain'

export interface OrderRepository {
  connect(): Promise<void>
  save(order: Order): Promise<void>
  load(id: string): Promise<Order | undefined>
  all(): Promise<Order[]>
}
