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
        include: { category: true, variants: true },
      }),
    productBySlug: async (
      _parent: unknown,
      args: { slug: string },
      context: IPrismaContext
    ) =>
      context.prisma.product.findUnique({
        where: { slug: args.slug },
        include: {
          category: true,
          variants: {
            include: { color: true, size: true },
          },
        },
      }),
  },
  Mutation: {
    createProduct: async (
      _parent: unknown,
      args: { input: CreateProductInput },
      context: IPrismaContext
    ) => {
      const { variants, ...baseProductInfo } = args.input

      return context.prisma.product.create({
        data: {
          ...baseProductInfo,
          ...(variants && { variants: { create: [...variants] } }),
        },
      })
    },
    updateProduct: async (
      _parent: unknown,
      args: { input: UpdateProductInput; productId: number },
      context: IPrismaContext
    ) => {
      const { variants, syncVariantPrices, syncedPrices, ...baseProductInfo } =
        args.input

      if (syncVariantPrices && syncedPrices) {
        await context.prisma.productVariant.updateMany({
          where: { productId: args.productId },
          data: {
            price: syncedPrices.price,
            ...(syncedPrices.salePrice && {
              salePrice: syncedPrices.salePrice,
            }),
          },
        })
      }

      return context.prisma.product.update({
        where: { id: args.productId },
        data: {
          ...baseProductInfo,
          ...(variants && {
            variants: {
              update: {
                where: { id: variants?.[0]?.id },
                data: { ...variants[0] },
              },
            },
          }),
        },
      })
    },
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
