// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { Quote } from '../../types/Quote';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Quote>
) {

  const quoteResponse = await fetch(`https://api.quotable.io/random`);
  const data: Quote = await quoteResponse.json();

  res.status(200).json(data);
}
