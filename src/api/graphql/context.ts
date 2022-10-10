// /graphql/context.ts
import { PrismaClient } from '@prisma/client'
import { UserRole } from 'api/generated/resolvers-types'
import { NextApiRequest } from 'next'
import * as jwt from 'next-auth/jwt'
import prisma from '../../lib/prisma'

type Token = {
  name: string
  email: string
  picture: string
  sub: string
  iat: number
  exp: number
  jti: string
  userRole: UserRole
}

export type GraohqlContext = {
  prisma: PrismaClient
  token: Token | null
}
// eslint-disable-next-line @typescript-eslint/require-await
export async function createContext({
  req,
}: {
  req: NextApiRequest
}): Promise<GraohqlContext> {
  const token = await jwt.getToken({ req, secret: process.env.SECRET })

  return {
    prisma,
    token: token as Token,
  }
}
