import * as factory from 'factory.ts'
import {cupcakeFixture} from '../cupcake/cupcakeFixture'
import {Order} from './Order'

export const orderFixture = factory.Sync.makeFactory<Order>({
  id: 'abc123',
  customerName: 'Mr Muffin',
  deliveryAddress: 'New York',
  items: factory.each(() => cupcakeFixture.buildList(5)),
})
