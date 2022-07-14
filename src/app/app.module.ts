import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core'
import { MatIconModule } from '@angular/material/icon'
import { MatToolbarModule } from '@angular/material/toolbar'
import { BrowserModule } from '@angular/platform-browser'
import { NoopAnimationsModule } from '@angular/platform-browser/animations'
import { RouterModule } from '@angular/router'

import { AppComponent } from './app.component'
import { LayoutComponent } from './components/layout/layout.component'
import { NewsItemComponent } from './components/news-item/news-item.component'
import { HackerDetailComponent } from './modules/hacker-detail/hacker-detail.component'
import { HackerListComponent } from './modules/hacker-list/hacker-list.component'
import { rootRoutes } from './routes'
import { ApiServiceService } from './services/api-service.service'

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HackerListComponent,
    HackerDetailComponent,
    NewsItemComponent,
  ],
  imports: [
    BrowserModule,
    MatIconModule,
    MatToolbarModule,
    NoopAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(rootRoutes),
  ],
  providers: [ApiServiceService],
  bootstrap: [AppComponent],
  exports: [RouterModule],
})
export class AppModule {}
