/**
 * @type {import('express').RequestHandler}
 */
export default async (req, res) => {
  console.log(req.body)
  res.status(200).send('Hello World!')
}
