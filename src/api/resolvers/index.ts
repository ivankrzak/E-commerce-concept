import { mergeResolvers } from '@graphql-tools/merge'
import address from './address/address'
import category from './category'
import paymentMethod from './paymentMethod/paymentMethod'
import product from './product'
import productOptions from './productOptions'
import productVariant from './productVariant'
import shippingMethod from './shippingMethod/shippingMethod'
import storeOrder from './storeOrder/storeOrder'
import user from './user'

export default mergeResolvers([
  address,
  product,
  productVariant,
  productOptions,
  category,
  user,
  shippingMethod,
  paymentMethod,
  storeOrder,
])
