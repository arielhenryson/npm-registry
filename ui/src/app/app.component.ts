import { Component, OnInit } from '@angular/core'
import { ApiService } from './services/api.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ],
})
export class AppComponent implements OnInit {
  loading = true
  package = 'rxbox'
  version = '0.7.1'
  tree: any
  timeout: any
  errorCode = 0
  errorMsg = ''

  constructor(
    // eslint-disable-next-line no-unused-vars
    private apiService: ApiService,
  ) {}

  async ngOnInit() {
    this.load()
  }

  async update() {
    clearTimeout(this.timeout)
    this.timeout = setTimeout(() => {
      this.load()
    }, 1000)
  }

  async load() {
    this.loading = true
    const res: any = await this.apiService.getPackage(this.package, this.version)
    if (res.error) {
      this.errorCode = res.code
      this.errorMsg = res.error
    } else {
      this.tree = res
      this.errorCode = 0
    }

    this.loading = false
  }
}
