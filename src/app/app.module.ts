import { NgModule } from '@angular/core';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { LayoutComponent } from './components/layout/layout.component';
import { HackerListComponent } from './modules/hacker-list/hacker-list.component';
import { HackerDetailComponent } from './modules/hacker-detail/hacker-detail.component';

const routes = [
  {
    path: 'hacker-detail',
    component: HackerDetailComponent,
  },
];

@NgModule({
  declarations: [AppComponent, LayoutComponent, HackerListComponent],
  imports: [
    BrowserModule,
    MatIconModule,
    MatToolbarModule,
    NoopAnimationsModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [RouterModule],
})
export class AppModule {}
