import { IPrismaContext } from 'api/prisma/IPrismaContext'

export const orderById = async (
  _parent: unknown,
  args: { id: number },
  context: IPrismaContext
) =>
  context.prisma.storeOrder.findUnique({
    where: { id: args.id },
    include: {
      shippingMethod: true,
      paymentMethod: true,
      user: true,
      storeOrderItems: {
        include: {
          productVariant: true,
        },
      },
    },
  })
