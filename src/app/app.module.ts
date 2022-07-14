import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core'
import { MatCardModule } from '@angular/material/card'
import { MatIconModule } from '@angular/material/icon'
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'
import { MatToolbarModule } from '@angular/material/toolbar'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { RouterModule } from '@angular/router'

import { AppComponent } from './app.component'
import { CommentCollapsibleComponent } from './components/comment-collapsible/comment-collapsible.component'
import { LayoutComponent } from './components/layout/layout.component'
import { NewsItemComponent } from './components/news-item/news-item.component'
import { HackerDetailComponent } from './modules/hacker-detail/hacker-detail.component'
import { HackerListComponent } from './modules/hacker-list/hacker-list.component'
import { rootRoutes } from './routes'
import { ApiService } from './services/api-service.service'

@NgModule({
  declarations: [
    AppComponent,
    HackerDetailComponent,
    HackerListComponent,
    LayoutComponent,
    NewsItemComponent,
    CommentCollapsibleComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatCardModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatToolbarModule,
    RouterModule.forRoot(rootRoutes),
  ],
  providers: [ApiService],
  bootstrap: [AppComponent],
  exports: [RouterModule],
})
export class AppModule {}
