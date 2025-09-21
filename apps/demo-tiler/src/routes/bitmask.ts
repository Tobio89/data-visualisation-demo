import { Request, Response } from 'express'
import { makeOptions } from '../utils/config'

const fallback_image = 'bitmask-tri-channel-05-256.png'

/**
 * Send a single PNG, test-001.png
 */
export const sendSinglePNG = (req: Request, res: Response) => {
  const options = makeOptions()

  const file = req.params.requested_image ?? fallback_image
  res.sendFile(`./bitmask/${file}.png`, options)
}

export const routes = {
  sendBitmask: '/bitmask/:requested_image/**',
}
