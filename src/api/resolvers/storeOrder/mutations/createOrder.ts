import { MutationCreateOrderArgs } from 'api/generated/resolvers-types'
import { IPrismaContext } from 'api/prisma/IPrismaContext'
import { ValidationError } from 'api/utils/graphqlErrors'
import { sum } from 'lodash'

export const createOrder = async (
  _parent: unknown,
  args: MutationCreateOrderArgs,
  context: IPrismaContext
) => {
  const {
    userId,
    paymentMethodId,
    shippingMethodId,
    orderedItems,
    notes,
    name,
    email,
    telNumber,
    addresses,
  } = args.input

  const orderItems = await context.prisma.productVariant.findMany({
    where: {
      id: { in: orderedItems.map(({ productVariantId }) => productVariantId) },
    },
    include: { product: true },
  })

  if (!orderItems || orderItems.length === 0) {
    throw new ValidationError({ message: 'Products in order are invalid!' })
  }

  return context.prisma.storeOrder.create({
    data: {
      userId,
      paymentMethodId,
      shippingMethodId,
      notes,
      name,
      email,
      telNumber,
      totalAmount: sum(
        orderItems.map(
          ({ id: variantId, price, salePrice }) =>
            (salePrice ?? price) *
            (orderedItems.find(
              ({ productVariantId }) => productVariantId === variantId
            )?.quantity ?? 1)
        )
      ),
      storeOrderItems: {
        createMany: {
          data: orderItems.map(
            ({ id: variantId, product, price, salePrice }) => ({
              name: product.name,
              price: salePrice ?? price,
              productVariantId: variantId,
              quantity:
                orderedItems.find(
                  ({ productVariantId }) => productVariantId === variantId
                )?.quantity ?? 1,
            })
          ),
        },
      },
      orderAddresses: {
        createMany: {
          data: addresses,
        },
      },
    },
  })
}
