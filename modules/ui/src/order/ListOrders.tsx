import {Box, Table, TableBody, TableCell, TableHeader, TableRow, Text} from 'grommet'
import * as React from 'react'
import {Order} from '../graphQLTypes'

interface Props {
  orders: Order[]
}

const columns = ['id', 'name', 'address', 'items']

export const ListOrders: React.FC<Props> = ({orders}) => {
  return (
    <>
      <Box align="center" pad="large">
        <Table caption="Sales today">
          <TableHeader>
            <TableRow>
              {columns.map((c) => (
                <TableCell key={c} scope="col">
                  <Text>{c}</Text>
                </TableCell>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {orders?.map((order) => (
              <TableRow key={order.id}>
                <TableCell key={order.id}>
                  <Text>{order.id.substr(0, 3)}</Text>
                </TableCell>
                <TableCell key={order.customerName}>
                  <Text>{order.customerName}</Text>
                </TableCell>
                <TableCell key={order.deliveryAddress}>
                  <Text>{order.deliveryAddress}</Text>
                </TableCell>
                <TableCell key={order.items.length}>
                  <Text>{order.items.length}</Text>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>
    </>
  )
}
