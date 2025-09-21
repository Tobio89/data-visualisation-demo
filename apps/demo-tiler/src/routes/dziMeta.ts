// Tobio : It says this is extraneus but it's in the package.json
// eslint-disable-next-line import/no-extraneous-dependencies
import { Request, Response } from 'express'
import { makeOptions } from '../utils/config'

export function handleMetaJPG(_req: Request, res: Response) {
  const options = makeOptions()

  res.sendFile('meta-jpg.xml', options)
}

export function handleMetaPNG(_req: Request, res: Response) {
  const options = makeOptions()

  res.sendFile('meta.xml', options)
}

export const routes = {
  handleMetaJPG: '/meta-jpg/**',
  handleMetaPNG: '/meta/**',
}
