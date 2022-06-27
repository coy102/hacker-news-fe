import { NgModule } from '@angular/core'
import { MatIconModule } from '@angular/material/icon'
import { MatToolbarModule } from '@angular/material/toolbar'
import { BrowserModule } from '@angular/platform-browser'
import { NoopAnimationsModule } from '@angular/platform-browser/animations'
import { RouterModule } from '@angular/router'

import { AppComponent } from './app.component'
import { LayoutComponent } from './components/layout/layout.component'
import { HackerListComponent } from './modules/hacker-list/hacker-list.component'
import { rootRoutes } from './routes'

@NgModule({
  declarations: [AppComponent, LayoutComponent, HackerListComponent],
  imports: [
    BrowserModule,
    MatIconModule,
    MatToolbarModule,
    NoopAnimationsModule,
    RouterModule.forRoot(rootRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [RouterModule],
})
export class AppModule {}
