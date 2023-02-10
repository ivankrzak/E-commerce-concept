import { changeOrderStatus } from './mutations/changeOrderStatus'
import { createOrder } from './mutations/createOrder'
import { orderById } from './queries/orderById'
import { orders } from './queries/orders'

export default {
  Query: {
    orders,
    orderById,
  },
  Mutation: {
    createOrder,
    changeOrderStatus,
  },
}
