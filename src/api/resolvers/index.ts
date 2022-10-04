import { mergeResolvers } from '@graphql-tools/merge'
import category from './category'
import product from './product'
import productOptions from './productOptions'

export default mergeResolvers([product, productOptions, category])
