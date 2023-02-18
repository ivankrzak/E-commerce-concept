import { IPrismaContext } from 'api/prisma/IPrismaContext'

export default {
  Query: {
    paymentMethods: async (
      _parent: unknown,
      _args: unknown,
      context: IPrismaContext
    ) => context.prisma.paymentMethod.findMany(),
  },
}
