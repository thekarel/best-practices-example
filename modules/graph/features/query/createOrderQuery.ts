import {gql} from 'apollo-server'

export const createOrderQuery = () => gql`
  mutation createOrder {
    createOrder(
      deliveryAddress: "New York"
      customerName: "Mr. Muffin"
      items: [
        {kind: sweet, features: [sugarFree], name: "One"}
        {kind: sweet, features: [vegan], name: "Two"}
        {kind: sweet, features: [exclusive], name: "Three"}
      ]
    ) {
      id
      customerName
      deliveryAddress
      items {
        name
      }
    }
  }
`
