import { mergeTypeDefs } from '@graphql-tools/merge'
import category from './category.graphql'
import date from './date.graphql'
import directives from './directives.graphql'
import paymentMethods from './paymentMethod.graphql'
import product from './product.graphql'
import productVariant from './productVariant.graphql'
import shippingMethods from './shippingMethod.graphql'
import storeOrder from './storeOrder.graphql'
import user from './user.graphql'

export default mergeTypeDefs([
  product,
  directives,
  productVariant,
  category,
  date,
  user,
  shippingMethods,
  paymentMethods,
  storeOrder,
])
