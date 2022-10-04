import {
  CreateProductColorInput,
  CreateProductSizeInput,
  QueryResolvers,
  UpdateProductColorInput,
  UpdateProductSizeInput,
} from '../generated/resolvers-types'
import { IPrismaContext } from '../prisma/IPrismaContext'

const ProductOptions: QueryResolvers = {
  Query: {
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
  Mutation: {
    createProductColor: async (
      _parent: unknown,
      args: { input: CreateProductColorInput },
      context: IPrismaContext
    ) => {
      const { name, hexValue } = args.input

      const isHexValueUsed = !(await context.prisma.productColor.findFirst({
        where: {
          hexValue,
        },
      }))
      const isNameUsed = !(await context.prisma.productColor.findFirst({
        where: {
          name,
        },
      }))
      if (isHexValueUsed) {
        throw new Error('Color with this HEX value already exists')
      }
      if (isNameUsed) {
        throw new Error('Color with this name already exists')
      }

      return context.prisma.productColor.create({
        data: {
          name,
          hexValue,
        },
      })
    },
    updateProductColor: (
      _parent: unknown,
      args: { input: UpdateProductColorInput; productColorId: number },
      context: IPrismaContext
    ) =>
      context.prisma.productColor.update({
        where: {
          id: args.productColorId,
        },
        data: {
          ...args.input,
        },
      }),
    deleteProductColor: async (
      _parent: unknown,
      args: { productColorId: number },
      context: IPrismaContext
    ) =>
      Boolean(
        await context.prisma.productColor.delete({
          where: {
            id: args.productColorId,
          },
        })
      ),
    createProductSize: async (
      _parent: unknown,
      args: { input: CreateProductSizeInput },
      context: IPrismaContext
    ) =>
      context.prisma.productSize.create({
        data: {
          ...args.input,
        },
      }),
    updateProductSize: (
      _parent: unknown,
      args: { input: UpdateProductSizeInput; productSizeId: number },
      context: IPrismaContext
    ) =>
      context.prisma.productSize.update({
        where: {
          id: args.productSizeId,
        },
        data: {
          ...args.input,
        },
      }),
    deleteProductSize: async (
      _parent: unknown,
      args: { productSizeId: number },
      context: IPrismaContext
    ) =>
      Boolean(
        await context.prisma.productSize.delete({
          where: {
            id: args.productSizeId,
          },
        })
      ),
  },
}

export default ProductOptions
