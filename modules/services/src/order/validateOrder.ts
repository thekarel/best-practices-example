import {CreateOrderPayload} from './CreateOrderPayload'
import {minimumOrderAmount} from './minimumOrderAmount'

const notEnoughItems = (order: CreateOrderPayload): boolean => order.items.length < minimumOrderAmount

export const validateOrder = (order: CreateOrderPayload): string[] | true => {
  const errors: string[] = []

  if (notEnoughItems(order)) {
    errors.push(`Order must contain at least ${minimumOrderAmount} items but contains only ${order.items.length}`)
  }

  return errors.length ? errors : true
}
