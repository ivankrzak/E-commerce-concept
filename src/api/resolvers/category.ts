import {
  CreateCategoryInput,
  QueryResolvers,
  UpdateCategoryInput,
} from '../generated/resolvers-types'
import { IPrismaContext } from '../prisma/IPrismaContext'

const Category: QueryResolvers = {
  Query: {
    categories: async (
      _parent: unknown,
      _args: unknown,
      context: IPrismaContext
    ) =>
      context.prisma.category.findMany({
        include: { subCategories: true, parentCategory: true },
      }),
  },
  Mutation: {
    createCategory: async (
      _parent: unknown,
      args: { input: CreateCategoryInput },
      context: IPrismaContext
    ) => {
      const { name, parentCategoryId } = args.input
      const canCreateCategory = !(await context.prisma.category.findFirst({
        where: {
          name,
        },
      }))

      if (canCreateCategory) {
        return context.prisma.category.create({
          data: {
            name,
            ...(parentCategoryId && { parentCategoryId }),
          },
        })
      }

      throw new Error('Category already exists')
    },
    updateCategory: (
      _parent: unknown,
      args: { input: UpdateCategoryInput; id: number },
      context: IPrismaContext
    ) => {
      const { name, parentCategoryId } = args.input
      return context.prisma.category.update({
        where: {
          id: args.id,
        },
        data: {
          ...(name && { name }),
          ...(parentCategoryId && { parentCategoryId }),
        },
      })
    },
    deleteCategory: async (
      _parent: unknown,
      args: { categoryId: number },
      context: IPrismaContext
    ) => {
      const updateSubCategories = context.prisma.category.updateMany({
        where: {
          parentCategoryId: args.categoryId,
        },
        data: { parentCategoryId: null },
      })
      const deleteCategory = context.prisma.category.delete({
        where: {
          id: args.categoryId,
        },
      })

      return Boolean(
        await context.prisma.$transaction([updateSubCategories, deleteCategory])
      )
    },
  },
}

export default Category
