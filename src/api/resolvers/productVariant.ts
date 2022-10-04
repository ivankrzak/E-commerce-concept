import {
  CreateProductVariantInput,
  QueryResolvers,
  UpdateProductVariantInput,
} from '../generated/resolvers-types'
import { IPrismaContext } from '../prisma/IPrismaContext'

const ProductVariant: QueryResolvers = {
  Query: {
    productVariants: async (
      _parent: unknown,
      _args: unknown,
      context: IPrismaContext
    ) =>
      context.prisma.productVariant.findMany({
        include: { product: true, color: true, size: true },
      }),
  },
  Mutation: {
    createProductVariant: async (
      _parent: unknown,
      args: { input: CreateProductVariantInput },
      context: IPrismaContext
    ) =>
      context.prisma.productVariant.create({
        data: {
          ...args.input,
        },
      }),
    updateProductVariant: (
      _parent: unknown,
      args: { input: UpdateProductVariantInput; productVariantId: number },
      context: IPrismaContext
    ) =>
      context.prisma.productVariant.update({
        where: {
          id: args.productVariantId,
        },
        data: {
          ...args.input,
        },
      }),
    deleteProductVariant: async (
      _parent: unknown,
      args: { productVariantId: number },
      context: IPrismaContext
    ) =>
      Boolean(
        await context.prisma.productVariant.delete({
          where: {
            id: args.productVariantId,
          },
        })
      ),
  },
}

export default ProductVariant
