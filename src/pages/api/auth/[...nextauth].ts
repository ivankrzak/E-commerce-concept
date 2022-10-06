import { PrismaAdapter } from '@next-auth/prisma-adapter'
import Prisma from 'api/prisma/client'
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
        username: { label: 'Username', type: 'text', placeholder: 'jsmith' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        // Add logic here to look up the user from the credentials supplied
        const dbUser = await Prisma.user.findFirst({
          where: { name: credentials?.username },
        })

        if (dbUser && dbUser.password === credentials?.password) {
          return dbUser
        }

        // If you return null then an error will be displayed advising the user to check their details.
        return null

        // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
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
