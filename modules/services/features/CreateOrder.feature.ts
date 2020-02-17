import {OrderRepositoryMemory} from '@cupcake/repository'
import {OrderRepository} from '../src'
import {EmailNotification} from '../src/EmailNotification'
import {createOrderPayloadFixture} from '../src/order/createOrderPayloadFixture'
import {OrderService} from '../src/order/OrderService'
import {EmailNotificationMock} from './EmailNotificationMock'

let orderService: OrderService
let emailNotification: EmailNotification
let orderRepository: OrderRepository

describe(`Create Order`, () => {
  beforeEach(() => {
    emailNotification = new EmailNotificationMock()
    orderRepository = new OrderRepositoryMemory()
    orderService = new OrderService(emailNotification, orderRepository)
  })

  describe(`Validate Order`, () => {
    it(`rejects empty order`, async () => {
      const payload = createOrderPayloadFixture.build({items: []})

      await expect(orderService.create(payload)).rejects.toThrowErrorMatchingInlineSnapshot(
        `"Order must contain at least 3 items but contains only 0"`,
      )
    })
  })

  it(`sends email notification`, async () => {
    jest.spyOn(emailNotification, 'sendOrderNotification')
    const payload = createOrderPayloadFixture.build()

    const order = await orderService.create(payload)

    expect(emailNotification.sendOrderNotification).toHaveBeenCalledWith(order)
  })

  it(`saves order`, async () => {
    jest.spyOn(orderRepository, 'save')
    const payload = createOrderPayloadFixture.build()

    const order = await orderService.create(payload)

    expect(orderRepository.save).toHaveBeenCalledWith(order)
  })
})
