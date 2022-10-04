import { mergeResolvers } from '@graphql-tools/merge'
import category from './category'
import product from './product'

export default mergeResolvers([product, category])
