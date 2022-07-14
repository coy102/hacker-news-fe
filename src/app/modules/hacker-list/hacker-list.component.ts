import { Component, OnInit } from '@angular/core'
import * as moment from 'moment'
import { map } from 'rxjs'
import { ApiService } from 'src/app/services/api-service.service'

@Component({
  selector: 'app-hacker-list',
  templateUrl: './hacker-list.component.html',
  styleUrls: ['./hacker-list.component.css'],
})
export class HackerListComponent implements OnInit {
  public news: any

  private subscription: any

  constructor(private apiService: ApiService) {
    this.news = []
  }

  ngOnInit(): void {
    this.subscription = this.apiService
      .getNewsItemInRange()
      .pipe(
        map((data) => {
          data.item.time = moment.unix(data.item.time).fromNow()
          return data
        })
      )
      .subscribe((data) => {
        this.news.push(data)
      })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }
}
