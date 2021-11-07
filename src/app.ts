import * as express from 'express'
import * as cors from 'cors'
import { getPackage } from './package'

/**
 * Bootstrap the application framework
 */
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function createApp() {
  const app = express()

  app.use(cors())

  app.use(express.json())

  app.get('/package/:name/:version', getPackage)

  app.use(express.static('uiDist/npm-view'))

  return app
}
