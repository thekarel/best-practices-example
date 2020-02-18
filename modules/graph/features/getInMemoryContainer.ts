import {EmailNotificationMock} from '@cupcake/notification'
import {OrderRepositoryMemory} from '@cupcake/repository'
import {OrderService} from '@cupcake/services'
import {asClass, createContainer} from 'awilix'
import {OrderResolver} from '../src/order/OrderResolver'

export const getInMemoryContainer = () =>
  createContainer({injectionMode: 'CLASSIC'}).register({
    emailNotification: asClass(EmailNotificationMock),
    orderRepository: asClass(OrderRepositoryMemory).singleton(),
    orderResolver: asClass(OrderResolver),
    orderService: asClass(OrderService),
  })
