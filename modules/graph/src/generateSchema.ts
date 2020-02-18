import {AwilixContainer} from 'awilix'
import {buildSchemaSync} from 'type-graphql'
import {OrderResolver} from './order/OrderResolver'

export const generateSchema = (container: AwilixContainer) =>
  buildSchemaSync({
    resolvers: [OrderResolver],
    container: {
      get: (constructor) => container.build(constructor),
    },
  })
