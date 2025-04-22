import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  try {
    // OpenAI entegrasyonu burada yapılacak
    return res.status(200).json({ message: 'AI response endpoint' })
  } catch (error) {
    return res.status(500).json({ message: 'Internal server error' })
  }
} 