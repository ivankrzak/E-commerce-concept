import { randomBytes, scryptSync, timingSafeEqual } from 'crypto'
import {
  CreateUserInput,
  LoginInput,
  QueryResolvers,
} from '../generated/resolvers-types'
import { IPrismaContext } from '../prisma/IPrismaContext'

const User: QueryResolvers = {
  Query: {
    login: async (
      _parent: unknown,
      args: { input: LoginInput },
      context: IPrismaContext
    ) => {
      const { email, password } = args.input
      const user = await context.prisma.user.findUnique({ where: { email } })

      if (user && user.password) {
        const [salt, key] = user.password.split(':')
        const hashedBuffer = scryptSync(password, salt, 64)
        const keyBuffer = Buffer.from(key, 'hex')
        const isMatch = timingSafeEqual(hashedBuffer, keyBuffer)

        return isMatch
      }
      return false
    },
  },
  Mutation: {
    createUser: async (
      _parent: unknown,
      args: { input: CreateUserInput },
      context: IPrismaContext
    ) => {
      const { password } = args.input
      const salt = randomBytes(16).toString('hex')
      const hashedPassword = scryptSync(password, salt, 64).toString('hex')

      return context.prisma.user.create({
        data: {
          ...args.input,
          password: `${salt}:${hashedPassword}`,
        },
      })
    },
  },
}

export default User
