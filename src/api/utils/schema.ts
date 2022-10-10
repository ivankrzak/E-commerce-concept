import { makeExecutableSchema } from '@graphql-tools/schema'
import resolvers from '../resolvers'
import mergedTypeDefs from '../typeDefs'
import { authDirective } from './directives'

const isAuthDirectiveTransformer = authDirective(
  'isAuth',
  (ctx) => ctx.token?.name !== undefined
)

const AllDirectives = [isAuthDirectiveTransformer]

const ExecutableSchema = makeExecutableSchema({
  typeDefs: mergedTypeDefs,
  resolvers,
})

export const Schema = AllDirectives.reduce(
  (acc, currentValue) => currentValue(acc),
  ExecutableSchema
)
