import 'reflect-metadata'
import {getGraphqlServer} from '../src/getGraphqlServer'
import {getInMemoryContainer} from './getInMemoryContainer'
import {createOrderQuery} from './query/createOrderQuery'
import {createTestClient, ApolloServerTestClient} from 'apollo-server-testing'

let testClient: ApolloServerTestClient

describe(`Order`, () => {
  beforeAll(async () => {
    const server = getGraphqlServer(getInMemoryContainer())
    testClient = createTestClient(server)
  })

  describe(`Create`, () => {
    it(`returns new order`, async () => {
      const response = await testClient.mutate({mutation: createOrderQuery()})

      expect(response).toMatchSnapshot({data: {createOrder: {id: expect.any(String)}}})
    })
  })
})
