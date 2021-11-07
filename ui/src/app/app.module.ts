import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { HttpClientModule } from '@angular/common/http'
import { MatIconModule } from '@angular/material/icon'
import { MatButtonModule } from '@angular/material/button'
import { MatInputModule } from '@angular/material/input'
import { FormsModule } from '@angular/forms'
import { MatProgressBarModule } from '@angular/material/progress-bar'

import { AppComponent } from './app.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { ApiService } from './services/api.service'
import { PackageComponent } from './components/package/package.component'

@NgModule({
  declarations: [
    AppComponent,
    PackageComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatProgressBarModule
  ],
  providers: [
    ApiService,
  ],
  bootstrap: [ AppComponent ],
})
export class AppModule { }
