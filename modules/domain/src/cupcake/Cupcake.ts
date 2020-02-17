import {Feature} from './Feature'
import {Kind} from './Kind'

export interface Cupcake {
  kind: Kind
  features: Feature[]
  name: string
}
