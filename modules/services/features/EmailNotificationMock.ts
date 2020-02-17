import {EmailNotification} from '../src/EmailNotification'
import {Order} from '@cupcake/domain'

export class EmailNotificationMock implements EmailNotification {
  public async sendOrderNotification(_: Order) {
    return
  }
}
