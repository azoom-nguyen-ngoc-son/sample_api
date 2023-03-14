/**
 * @type {import('express').RequestHandler}
 */
import { prisma } from '@database'

export default async (req, res) => {
  const { userId } = req.params
  const user = await prisma.user.findUnique({
    where: { id: userId },
  })
  if (!user) {
    return res.status(404).send({ erros: 'user not found' })
  }

  const friends = await prisma.friends.findMany({
    where: { userId: userId },
    select: { userId: true },
  })
  res.send(friends)
}
