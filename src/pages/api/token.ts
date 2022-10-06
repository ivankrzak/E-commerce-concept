import { NextApiRequest, NextApiResponse } from 'next'
import * as jwt from 'next-auth/jwt'

const { SECRET } = process.env

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const token = await jwt.getToken({ req, secret: SECRET })
  res.send(JSON.stringify(token, undefined, 2))
}
