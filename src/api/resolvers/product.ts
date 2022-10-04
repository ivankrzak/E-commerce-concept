import { QueryResolvers } from '../generated/resolvers-types'
import { IPrismaContext } from '../prisma/IPrismaContext'

const Product: QueryResolvers = {
  Query: {
    products: async (
      _parent: unknown,
      _args: unknown,
      context: IPrismaContext
    ) =>
      context.prisma.product.findMany({
        include: { category: true },
      }),
    productVariants: async (
      _parent: unknown,
      _args: unknown,
      context: IPrismaContext
    ) =>
      context.prisma.productVariant.findMany({
        include: { product: true, color: true, size: true },
      }),
    productColors: async (
      _parent: unknown,
      _args: unknown,
      context: IPrismaContext
    ) =>
      context.prisma.productColor.findMany({
        include: { productVariants: true },
      }),
    productSizes: async (
      _parent: unknown,
      _args: unknown,
      context: IPrismaContext
    ) =>
      context.prisma.productSize.findMany({
        include: { productVariants: true },
      }),
  },
}

export default Product
