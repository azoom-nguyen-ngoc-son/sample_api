/**
 * @type {import('express').RequestHandler}
 */

import bcrypt from 'bcrypt'

import { prisma } from '@database'

export default async (req, res) => {
  const { email, phoneNumber, password } = req.body
  const hashedPassword = await bcrypt.hash(password, 10)

  const user = await prisma.users.findFirst({
    where: {
      OR: [{ email }, { phoneNumber }],
    },
  })

  if (user) {
    if (user.email === email) {
      return res.status(400).send('Email already exists!')
    }
    if (user.phoneNumber === phoneNumber) {
      return res.status(400).send('Phone number already exists')
    }
  }

  res.status(200).send('Register success!')
}
