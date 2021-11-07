import got from 'got'

import { NPMPackage } from '../types'
import { CacheService } from './cache.service'
import { SemverService } from './semver.service'

export class PackageService {
  async getPackage(name: string, version: string) {
    const cacheService = new CacheService()
    const semVerService = new SemverService()

    // try to take the data from inmemory cache before making a request
    let dependencies = cacheService.get(name, version)

    let npmPackage: NPMPackage

    const deps: any[] = []
    let semVer = version

    // no cache for this so lets fetch the data
    if (!dependencies) {
      npmPackage = await got(
        `https://registry.npmjs.org/${name}`,
      ).json()

      try {
        // return max satisfying version
        semVer = semVerService.getVersion(npmPackage.versions, version)

        dependencies = npmPackage.versions[semVer].dependencies
      } catch {

        throw {
          response: {
            body: 'no such version',
          },
        }
      }

      for (const pack in dependencies) {
        const res = await this.getPackage(pack, dependencies[pack])
        deps.push(res)
      }

      // save the results for potentially duplication in the tree
      cacheService.save(name, version, dependencies)
    }

    return {
      name,
      version: semVer,
      dependencies: deps,
    }
  }
}
