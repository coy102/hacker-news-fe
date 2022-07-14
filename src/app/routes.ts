import { Routes } from '@angular/router'

import { HackerDetailComponent } from './modules/hacker-detail/hacker-detail.component'
import { HackerListComponent } from './modules/hacker-list/hacker-list.component'

export const rootRoutes: Routes = [
  {
    path: '',
    component: HackerListComponent,
  },
  {
    path: 'detail/:id',
    component: HackerDetailComponent,
  },
]
