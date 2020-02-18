import {Cupcake as DomainCupcake, Feature, Kind} from '@cupcake/domain'
import {Field, ObjectType, registerEnumType, InputType} from 'type-graphql'

registerEnumType(Kind, {name: 'Kind'})
registerEnumType(Feature, {name: 'Feature'})

@ObjectType()
@InputType('CupcakeInput')
export class Cupcake implements DomainCupcake {
  @Field(() => Kind)
  kind!: Kind

  @Field(() => [Feature])
  features!: Feature[]

  @Field()
  name!: string
}
