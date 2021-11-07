import { maxSatisfying } from 'semver'

/*
  Semver over the rainbow
  Way up high
  And the dreams that you dream of
  Once in a lullaby :-)
 */
export class SemverService {
  getVersion(versionsObj: any, version: string) {
    const versions = Object.keys(versionsObj)
    return maxSatisfying(versions, version) as string
  }
}
