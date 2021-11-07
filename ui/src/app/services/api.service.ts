import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

@Injectable()
export class ApiService {
  constructor(
    // eslint-disable-next-line no-unused-vars
    private httpClient: HttpClient,
  ) {}

  async getPackage(name: string, version: string) {
    const encodeName = encodeURIComponent(name)
    const url = `http://localhost:3000/package/${encodeName}/${version}`

    return await this.httpClient.get(url).toPromise()
  }
}

