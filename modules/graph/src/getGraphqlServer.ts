import {ApolloServer} from 'apollo-server'
import {AwilixContainer} from 'awilix'
import {generateSchema} from './generateSchema'

export const getGraphqlServer = (container: AwilixContainer): ApolloServer => {
  const schema = generateSchema(container)

  const server = new ApolloServer({
    schema,
  })

  return server
}
