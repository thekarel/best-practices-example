import * as factory from 'factory.ts'
import {cupcakeFixture} from '@cupcake/domain'
import {CreateOrderPayload} from './CreateOrderPayload'

export const createOrderPayloadFixture = factory.Sync.makeFactory<CreateOrderPayload>({
  customerName: 'Ms Muffin',
  deliveryAddress: 'York',
  items: factory.each(() => cupcakeFixture.buildList(5)),
})
