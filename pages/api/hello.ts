// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from 'next'

const hello = (req: NextApiRequest, res: NextApiResponse) => {
  const ip = req.headers["x-forwarded-for"] || req.socket.remoteAddress;
  res.status(200).json(ip)
}

export default hello
