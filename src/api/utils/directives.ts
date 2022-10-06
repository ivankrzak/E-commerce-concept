import { getDirective, MapperKind, mapSchema } from '@graphql-tools/utils'
import { defaultFieldResolver, GraphQLSchema } from 'graphql'
import { GraohqlContext } from '../graphql/context'
import { AuthError } from './graphqlErrors'

export const authDirective = (
  directiveName: string,
  isAuthorizedFunction: (ctx: GraohqlContext) => boolean
) => {
  const typeDirectiveArgumentMaps: Record<string, any> = {}
  return (schema: GraphQLSchema) =>
    mapSchema(schema, {
      [MapperKind.OBJECT_FIELD]: (fieldConfig, _fieldName, typeName) => {
        const directive =
          getDirective(schema, fieldConfig, directiveName)?.[0] ??
          typeDirectiveArgumentMaps[typeName]
        if (!directive) {
          return fieldConfig
        }
        const { userRoles }: { userRoles: string[] | null } = directive
        const { resolve = defaultFieldResolver } = fieldConfig
        // eslint-disable-next-line no-param-reassign
        fieldConfig.resolve = (source, args, context: GraohqlContext, info) => {
          if (userRoles === null || userRoles.length === 0) {
            if (!isAuthorizedFunction(context)) {
              throw new AuthError()
            }
          } else if (userRoles.length > 0) {
            if (!userRoles.some((role) => context.token?.userRole === role)) {
              throw new AuthError()
            }
          }
          // eslint-disable-next-line @typescript-eslint/no-unsafe-return
          return resolve(source, args, context, info)
        }
        return fieldConfig
      },
    })
}
