import { RequestHandler } from 'express'
import { PackageService } from './services/package.service'

const packageService = new PackageService()

/**
 * Attempts to retrieve package data from the npm registry and return it
 */
export const getPackage: RequestHandler = async function (req, res, next) {
  const { name, version } = req.params

  try {
    const results = await packageService.getPackage(name, version)

    res.send(results)
  } catch (error: any) {
    if (error.response.body === 'no such version') {
      res.send({
        error: error.response.body,
        code: 2,
      })

      return
    }

    if (error.response.body.includes('Not found')) {
      res.send({
        error: `Can't find package with the name ${name}`,
        code: 1,
      })

      return
    }

    res.send({
      error: 'unknown error',
      code: 3,
    })
  }
}
