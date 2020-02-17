import {Order} from '@cupcake/domain'

export interface EmailNotification {
  sendOrderNotification: (order: Order) => Promise<void>
}
