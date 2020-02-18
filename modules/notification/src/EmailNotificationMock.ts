import {EmailNotification} from '@cupcake/services'
import {Order} from '@cupcake/domain'

export class EmailNotificationMock implements EmailNotification {
  public async sendOrderNotification(_: Order) {
    return
  }
}
