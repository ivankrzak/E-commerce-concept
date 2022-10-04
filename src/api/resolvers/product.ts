import {
  CreateProductInput,
  QueryResolvers,
  UpdateProductInput,
} from '../generated/resolvers-types'
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
  },
  Mutation: {
    createProduct: async (
      _parent: unknown,
      args: { input: CreateProductInput },
      context: IPrismaContext
    ) =>
      context.prisma.product.create({
        data: {
          ...args.input,
        },
      }),
    updateProduct: async (
      _parent: unknown,
      args: { input: UpdateProductInput; productId: number },
      context: IPrismaContext
    ) =>
      context.prisma.product.update({
        where: { id: args.productId },
        data: {
          ...args.input,
        },
      }),
    deleteProduct: async (
      _parent: unknown,
      args: { productId: number },
      context: IPrismaContext
    ) =>
      Boolean(
        await context.prisma.product.delete({
          where: { id: args.productId },
        })
      ),
  },
}

export default Product
