import { mergeTypeDefs } from '@graphql-tools/merge'
import category from './category.graphql'
import date from './date.graphql'
import directives from './directives.graphql'
import product from './product.graphql'
import productVariant from './productVariant.graphql'

export default mergeTypeDefs([
  product,
  directives,
  productVariant,
  category,
  date,
])
