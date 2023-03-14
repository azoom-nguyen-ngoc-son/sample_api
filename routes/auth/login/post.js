/**
 * @type {import('express').RequestHandler}
 */

import { prisma } from '@database'

export default async (req, res) => {
  const { email, password } = req.body
  const user = await prisma.users.findFirst({
    where: { email },
  })

  if (!user) throw new Error('Invalid email or password')
  const isValidPassword = await bcrypt.compare(password, user.password)
  if (!isValidPassword) throw new Error('Invalid email or pasword')

  return user
}
