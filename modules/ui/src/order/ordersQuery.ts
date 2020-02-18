export const ordersQuery = `{
  orders{
    id
    customerName
    deliveryAddress
    items{
      features
      kind
      name
    }
  }
}`
