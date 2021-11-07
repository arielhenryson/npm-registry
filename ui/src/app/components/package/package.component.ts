import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-package',
  templateUrl: 'package.component.html',
  styleUrls: [ 'package.component.scss' ],
})
export class PackageComponent {
  open = true

  @Input() data!: {
    name: string,
    version: string,
    dependencies: any[],
  }
}
