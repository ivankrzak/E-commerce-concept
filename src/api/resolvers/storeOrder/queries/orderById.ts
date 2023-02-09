import { IPrismaContext } from 'api/prisma/IPrismaContext'

export const orderById = async (
  _parent: unknown,
  args: { orderId: number },
  context: IPrismaContext
) =>
  context.prisma.storeOrder.findUnique({
    where: { id: args.orderId },
    include: {
      shippingMethod: true,
      paymentMethod: true,
      user: true,
      storeOrderItems: true,
    },
  })
