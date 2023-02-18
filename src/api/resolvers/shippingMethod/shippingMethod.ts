import { IPrismaContext } from 'api/prisma/IPrismaContext'

export default {
  Query: {
    shippingMethods: async (
      _parent: unknown,
      _args: unknown,
      context: IPrismaContext
    ) => context.prisma.shippingMethod.findMany(),
  },
}
