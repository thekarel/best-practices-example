export const createOrderMutation = `
mutation createOrder(
  $deliveryAddress: String!
  $customerName: String!
  $items: [CupcakeInput!]!
) {
  createOrder(
    deliveryAddress: $deliveryAddress,
    customerName: $customerName,
    items: $items
  ) {
    id
    customerName
    items{
      name
    }
    deliveryAddress
  }
}
`
