import {OrderRepository} from '@cupcake/services'
import {ApolloServer} from 'apollo-server'
import {AwilixContainer} from 'awilix'
import {generateSchema} from './generateSchema'

export const getGraphqlServer = async (container: AwilixContainer): Promise<ApolloServer> => {
  const schema = generateSchema(container)
  const repository = container.resolve<OrderRepository>('orderRepository')
  await repository.connect()

  const server = new ApolloServer({
    schema,
  })

  return server
}
