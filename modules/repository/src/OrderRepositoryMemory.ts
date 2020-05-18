import {OrderRepository} from '@cupcake/services'
import {Order} from '@cupcake/domain'

export class OrderRepositoryMemory implements OrderRepository {
  private orders: Map<string, Order> = new Map()

  async connect() {
    return
  }

  async save(order: Order) {
    this.orders.set(order.id, order)
  }

  async load(id: string) {
    return this.orders.get(id)
  }

  async all() {
    return Array.from(this.orders.values())
  }
}
