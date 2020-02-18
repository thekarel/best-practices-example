import {Cupcake as DomainCupcake, Order as DomainOrder} from '@cupcake/domain'
import {Field, ID, ObjectType} from 'type-graphql'
import {Cupcake} from '../cupcake/Cupcake'

@ObjectType()
export class Order implements DomainOrder {
  @Field(() => ID)
  id!: string

  @Field()
  customerName!: string

  @Field()
  deliveryAddress!: string

  @Field(() => [Cupcake])
  items!: DomainCupcake[]
}
