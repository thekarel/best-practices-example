import {Cupcake as DomainCupcake, Order as DomainOrder} from '@cupcake/domain'
import {OrderService} from '@cupcake/services'
import {Arg, Mutation, Query, Resolver} from 'type-graphql'
import {Cupcake} from '../cupcake/Cupcake'
import {Order} from './Order'

@Resolver()
export class OrderResolver {
  constructor(private readonly orderService: OrderService) {}

  @Query(() => [Order])
  async orders(): Promise<DomainOrder[]> {
    return this.orderService.all()
  }

  @Query(() => Order, {nullable: true})
  async order(@Arg('id') id: string): Promise<DomainOrder | undefined> {
    return this.orderService.load(id)
  }

  @Mutation(() => Order)
  async createOrder(
    @Arg('customerName') customerName: string,
    @Arg('deliveryAddress') deliveryAddress: string,
    @Arg('items', () => [Cupcake]) items: DomainCupcake[],
  ): Promise<DomainOrder> {
    const newOrder = await this.orderService.create({
      customerName,
      deliveryAddress,
      items,
    })

    return newOrder
  }
}
