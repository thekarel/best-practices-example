import * as factory from 'factory.ts'
import {Cupcake} from './Cupcake'
import {Feature} from './Feature'
import {Kind} from './Kind'

export const cupcakeFixture = factory.Sync.makeFactory<Cupcake>({
  kind: Kind.sweet,
  features: [Feature.sugarFree],
  name: 'A randomly chosen name',
})
