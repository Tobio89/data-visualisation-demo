/* eslint-disable no-console */
import { createServer } from './server'

createServer()
  .then(server => {
    server.listen(4444, () => {
      console.info(
        `OSD-React-Renderer: Demo Tiler, Listening on http://localhost:4444`
      )
    })
  })
  .catch(err => {
    console.error(`OSD-React-Renderer: Demo Tiler, Error: ${err}`)
  })
