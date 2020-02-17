import {Order} from '@cupcake/domain'
import {EmailNotification} from '../EmailNotification'
import {CreateOrderPayload} from './CreateOrderPayload'
import {InvalidOrderPayloadError} from './InvalidOrderPayloadError'
import {validateOrder} from './validateOrder'
import nanoid = require('nanoid')

export class OrderService {
  constructor(private readonly emailNotification: EmailNotification) {}

  public async create(payload: CreateOrderPayload): Promise<Order> {
    const validationResult = validateOrder(payload)

    if (validationResult !== true) {
      throw new InvalidOrderPayloadError(validationResult)
    }

    const id = nanoid()
    const order = {
      ...payload,
      id,
    }

    await this.emailNotification.sendOrderNotification(order)

    return order
  }
}
