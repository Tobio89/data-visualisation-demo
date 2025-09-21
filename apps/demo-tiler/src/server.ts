import { Express } from 'express'

import { initServer } from './utils/config'

import * as meta from './routes/dziMeta'
import * as simpleImage from './routes/simpleImages'
import * as complexImage from './routes/complex'
import * as bitmask from './routes/bitmask'

export async function createServer(): Promise<Express> {
  const server = initServer()

  // Metadata Routes: Sends XML files
  server.get(meta.routes.handleMetaJPG, meta.handleMetaJPG)
  server.get(meta.routes.handleMetaPNG, meta.handleMetaPNG)

  // Simple Image Routes: For testing simple image requests
  server.get(simpleImage.routes.sendSinglePNG, simpleImage.sendSinglePNG)
  server.get(simpleImage.routes.sendSingleJPG, simpleImage.sendSingleJPG)
  server.get(simpleImage.routes.sendSimplePNG, simpleImage.sendSimplePNG)
  server.get(simpleImage.routes.sendQueryPNG, simpleImage.sendQueryPNG)
  server.get(simpleImage.routes.sendHiddenPNG, simpleImage.sendHiddenPNG)

  // Complex Image Routes: For testing complex image requests that can return a range of different images
  server.get(complexImage.routes.sendComplexPNG, complexImage.sendComplexPNG)
  server.get(complexImage.routes.sendTextEditPNG, complexImage.sendTextEditPNG)
  server.get(
    complexImage.routes.sendLiveMergedPNG,
    complexImage.sendLiveMergedPNG
  )

  server.get(bitmask.routes.sendBitmask, bitmask.sendSinglePNG)

  return server
}
