import { MutationCreateOrUpdateAddressArgs } from 'api/generated/resolvers-types'
import { IPrismaContext } from 'api/prisma/IPrismaContext'

export const createOrUpdateAddress = (
  _parent: unknown,
  args: MutationCreateOrUpdateAddressArgs,
  context: IPrismaContext
) => {
  if (args.input.id) {
    return context.prisma.address.update({
      where: { id: args.input.id },
      data: { ...args.input },
    })
  }
  return context.prisma.address.create({ data: { ...args.input } })
}
