import { MutationChangeOrderStatusArgs } from 'api/generated/resolvers-types'
import { IPrismaContext } from 'api/prisma/IPrismaContext'

export const changeOrderStatus = (
  _parent: unknown,
  args: MutationChangeOrderStatusArgs,
  context: IPrismaContext
) => {
  const { orderIds, status } = args.input
  return Boolean(
    context.prisma.storeOrder.updateMany({
      where: { id: { in: orderIds } },
      data: {
        status,
      },
    })
  )
}
