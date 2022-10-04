import { QueryResolvers } from '../generated/resolvers-types'
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
}

export default Category
