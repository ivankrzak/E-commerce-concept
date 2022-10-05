import { PrismaAdapter } from '@next-auth/prisma-adapter'
import Prisma from 'api/prisma/client'
import NextAuth from 'next-auth'
import GitHubProvider from 'next-auth/providers/github'

export default NextAuth({
  adapter: PrismaAdapter(Prisma),
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
  ],
  secret: process.env.SECRET,
  callbacks: {
    session({ session, user }) {
      return {
        expires: session.expires,
        user: user.name,
        userId: user.id,
        userRole: user.role,
      }
    },
  },
})
