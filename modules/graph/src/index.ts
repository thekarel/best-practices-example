import 'reflect-metadata'
import {getGraphqlServer} from './getGraphqlServer'
import {getProductionContainer} from './getProductionContainer'

const port = 8888
const server = getGraphqlServer(getProductionContainer())

console.log(`🧁 GraphQL Playground running on http://localhost:${port}`)
server.listen(port)
