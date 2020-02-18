import {useManualQuery, useMutation} from 'graphql-hooks'
import * as React from 'react'
import {ErrorMessage} from '../base/ErrorMessage'
import {Loading} from '../base/Loading'
import {Feature, Kind, MutationCreateOrderArgs, Query} from '../graphQLTypes'
import {CreateOrder} from '../order/CreateOrder'
import {createOrderMutation} from '../order/createOrderMutation'
import {ListOrders} from '../order/ListOrders'
import {ordersQuery} from '../order/ordersQuery'

export const DashboardContainer = () => {
  const [fetchOrders, ordersFetchStatus] = useManualQuery<{orders: Query['orders']}>(ordersQuery)
  React.useEffect(() => {
    fetchOrders()
  }, [false])

  const dumbOrderArgs: MutationCreateOrderArgs = {
    deliveryAddress: 'New York',
    customerName: 'Mr. Muffin',
    items: [
      {kind: Kind.savoury, features: [Feature.sugarFree], name: 'One'},
      {kind: Kind.sweet, features: [Feature.vegan], name: 'Two'},
      {kind: Kind.sweet, features: [Feature.exclusive], name: 'Three'},
    ],
  }

  const [runCreateOrder, createOrderStatus] = useMutation(createOrderMutation, {variables: dumbOrderArgs})

  const createNewOrder = async () => {
    await runCreateOrder()
    fetchOrders()
  }

  return (
    <>
      <h1>
        Create <small style={{color: 'silver'}}>fake</small> Order
      </h1>
      {createOrderStatus.loading && <Loading />}
      {createOrderStatus.error && <ErrorMessage message="😿" />}
      <CreateOrder onCreateClick={createNewOrder} />

      <h1>Orders so far</h1>
      {ordersFetchStatus.loading && <Loading />}
      {ordersFetchStatus.error && <ErrorMessage message="🙀" />}
      <ListOrders orders={ordersFetchStatus.data?.orders} />
    </>
  )
}
