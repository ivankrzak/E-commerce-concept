import { IPrismaContext } from 'api/prisma/IPrismaContext'

export const orders = async (
  _parent: unknown,
  _args: unknown,
  context: IPrismaContext
) =>
  context.prisma.storeOrder.findMany({
    include: {
      shippingMethod: true,
      paymentMethod: true,
      user: true,
      storeOrderItems: true,
    },
  })
