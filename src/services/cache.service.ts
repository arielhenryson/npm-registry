export class CacheService {
  private cache = {}

  save(name: string, version: string, data: any): void {
    if (this.cache[name + '|' + version]) {
      return // already cached
    }

    this.cache[name + '|' + version] = data
  }

  get(name: string, version: string) {
    return this.cache[name + '|' + version]
  }
}
