import { mergeResolvers } from '@graphql-tools/merge'
import category from './category'
import product from './product'
import productOptions from './productOptions'
import productVariant from './productVariant'

export default mergeResolvers([
  product,
  productVariant,
  productOptions,
  category,
])
