import { PrismaAdapter } from '@next-auth/prisma-adapter'
import Prisma from 'api/prisma/client'
import { scryptSync, timingSafeEqual } from 'crypto'
import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import GitHubProvider from 'next-auth/providers/github'

export default NextAuth({
  session: {
    strategy: 'jwt',
  },
  adapter: PrismaAdapter(Prisma),
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'email', type: 'text', placeholder: 'jsmith' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        // Add logic here to look up the user from the credentials supplied
        const user = await Prisma.user.findUnique({
          where: { email: credentials?.email },
        })

        if (user && user.password && credentials) {
          const [salt, key] = user.password.split(':')
          const hashedBuffer = scryptSync(credentials.password, salt, 64)
          const keyBuffer = Buffer.from(key, 'hex')
          const isMatch = timingSafeEqual(hashedBuffer, keyBuffer)

          return isMatch ? user : null
        }
        return null
      },
    }),
  ],
  secret: process.env.SECRET,
  callbacks: {
    // eslint-disable-next-line @typescript-eslint/require-await
    async jwt({ token, user }) {
      if (user) {
        // eslint-disable-next-line no-param-reassign
        token.userRole = user.role
      }
      return token
    },
  },
})
