import { Request, Response } from 'express'

// eslint-disable-next-line import/no-extraneous-dependencies
import Jimp from 'jimp'
import path from 'path'
import { makeOptions } from '../utils/config'

type TileQueries = {
  tl: {
    visible: boolean
    shape: string
    color: string
  }
  tr: {
    visible: boolean
    shape: string
    color: string
  }
  bl: {
    visible: boolean
    shape: string
    color: string
  }
  br: {
    visible: boolean
    shape: string
    color: string
  }
}

function collectQueries(q: Request['query']): TileQueries {
  return {
    tl: {
      visible: q.tlVisible === 'true',
      shape: (q.tlShape ?? 'SQUARE') as string,
      color: (q.tlColor ?? 'RED') as string,
    },
    tr: {
      visible: q.trVisible === 'true',
      shape: (q.trShape ?? 'SQUARE') as string,
      color: (q.trColor ?? 'RED') as string,
    },
    bl: {
      visible: q.blVisible === 'true',
      shape: (q.blShape ?? 'SQUARE') as string,
      color: (q.blColor ?? 'RED') as string,
    },
    br: {
      visible: q.brVisible === 'true',
      shape: (q.brShape ?? 'SQUARE') as string,
      color: (q.brColor ?? 'RED') as string,
    },
  }
}

async function printOntoImage(imagePath: string, text: string) {
  const font = await Jimp.loadFont(Jimp.FONT_SANS_32_BLACK)

  const pth = path.join(__dirname, '..', 'utils', 'public', imagePath)

  const image = await Jimp.read(pth)

  image.print(font, 10, 10, text)

  return image
}

async function mergeTiles(tileQueries: TileQueries) {
  const fullPath = (imagePath: string) =>
    path.join(__dirname, '..', 'utils', 'public', 'complex-testing', imagePath)

  const { tl, tr, bl, br } = tileQueries
  const mergedImage = new Jimp(255, 255)

  if (tl.visible) {
    const tlImagePath = `TEST-00-${tl.shape}-${tl.color}.png`
    const tlImage = await Jimp.read(fullPath(tlImagePath))
    mergedImage.blit(tlImage, 0, 0)
  }

  if (tr.visible) {
    const trImagePath = `TEST-01-${tr.shape}-${tr.color}.png`
    const trImage = await Jimp.read(fullPath(trImagePath))
    mergedImage.blit(trImage, 0, 0)
  }

  if (bl.visible) {
    const blImagePath = `TEST-02-${bl.shape}-${bl.color}.png`
    const blImage = await Jimp.read(fullPath(blImagePath))
    mergedImage.blit(blImage, 0, 0)
  }

  if (br.visible) {
    const brImagePath = `TEST-03-${br.shape}-${br.color}.png`
    const brImage = await Jimp.read(fullPath(brImagePath))
    mergedImage.blit(brImage, 0, 0)
  }

  return mergedImage
}

export const sendComplexPNG = (req: Request, res: Response) => {
  const options = makeOptions()

  const position = req.params.testNumber.replace('_files', '') ?? '00'
  const shape = req.query.shape ?? 'SQUARE'
  const color = req.query.color ?? 'RED'

  const req_fle = `${position}-${shape}-${color}`

  res.sendFile(`./complex-testing/TEST-${req_fle}.png`, options)
}

export const sendTextEditPNG = (req: Request, res: Response) => {
  const options = makeOptions()

  const position = req.params.testNumber.replace('_files', '') ?? '00'
  const shape = req.query.shape ?? 'SQUARE'
  const color = req.query.color ?? 'RED'
  const text = req.query.text ?? null

  const req_fle = `TEST-${position}-${shape}-${color}.png`
  if (!text) {
    res.sendFile(`./complex-testing/${req_fle}`, options)
    return
  }

  const imagePath = `./complex-testing/${req_fle}`
  printOntoImage(imagePath, text as string)
    .then(image => image.getBufferAsync(Jimp.MIME_PNG))
    .then(buffer => {
      res.setHeader('Content-Type', 'image/png')
      res.send(buffer)
    })

  // res.sendFile(imgData, options)
}

export const sendLiveMergedPNG = (req: Request, res: Response) => {
  const queries = collectQueries(req.query)

  mergeTiles(queries)
    .then(image => image.getBufferAsync(Jimp.MIME_PNG))
    .then(buffer => {
      res.setHeader('Content-Type', 'image/png')
      res.send(buffer)
    })
}

export const routes = {
  sendComplexPNG: '/complex/:testNumber/**',
  sendTextEditPNG: '/complex-text/:testNumber/**',
  sendLiveMergedPNG: '/complex-merged/:testNumber/**',
}
