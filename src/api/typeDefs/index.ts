import { mergeTypeDefs } from '@graphql-tools/merge'
import category from './category.graphql'
import date from './date.graphql'
import product from './product.graphql'

export default mergeTypeDefs([product, category, date])
