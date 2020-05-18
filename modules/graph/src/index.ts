import 'reflect-metadata'
import {getGraphqlServer} from './getGraphqlServer'
import {getProductionContainer} from './getProductionContainer'

const start = async () => {
  const mongoUrl = process.env.MONGO_URL
  !mongoUrl && console.warn('🤯 No MONGO_URL was provided, using an in-memory repository')

  try {
    const port = 8888
    const container = await getProductionContainer({mongoUrl})
    const server = await getGraphqlServer(container)

    console.log(`🧁 GraphQL Playground running on http://localhost:${port}`)
    server.listen(port)
  } catch (error) {
    throw error
  }
}

start()
