import {EmailNotificationMock} from '@cupcake/notification'
import {OrderRepositoryMemory} from '@cupcake/repository'
import {OrderRepositoryMongo} from '@cupcake/repository/src/OrderRepositoryMongo'
import {OrderService} from '@cupcake/services'
import {asClass, createContainer} from 'awilix'
import {OrderResolver} from './order/OrderResolver'

interface Env {
  mongoUrl?: string
}

export const getProductionContainer = async ({mongoUrl}: Env) => {
  const repository = mongoUrl
    ? asClass(OrderRepositoryMongo)
        .classic()
        .inject(() => ({url: mongoUrl}))
        .singleton()
    : asClass(OrderRepositoryMemory)

  return createContainer({injectionMode: 'CLASSIC'}).register({
    emailNotification: asClass(EmailNotificationMock),
    orderRepository: repository,
    orderResolver: asClass(OrderResolver),
    orderService: asClass(OrderService),
  })
}
