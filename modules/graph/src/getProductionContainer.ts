import {EmailNotificationMock} from '@cupcake/notification'
import {OrderRepositoryMemory} from '@cupcake/repository'
import {OrderService} from '@cupcake/services'
import {asClass, createContainer} from 'awilix'
import {OrderResolver} from './order/OrderResolver'

export const getProductionContainer = () =>
  createContainer({injectionMode: 'CLASSIC'}).register({
    emailNotification: asClass(EmailNotificationMock),
    orderRepository: asClass(OrderRepositoryMemory).singleton(),
    orderResolver: asClass(OrderResolver),
    orderService: asClass(OrderService),
  })
