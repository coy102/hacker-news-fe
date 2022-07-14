import { Component, OnInit } from '@angular/core'
import * as moment from 'moment'
import { map } from 'rxjs'
import { ApiService } from 'src/app/services/api-service.service'
import { NewsItems } from 'src/app/services/types/news'
import { NewsProvider } from 'src/app/utils/news-provider'

@Component({
  selector: 'app-hacker-list',
  templateUrl: './hacker-list.component.html',
  styleUrls: ['./hacker-list.component.css'],
})
export class HackerListComponent implements OnInit {
  public news: NewsItems[]

  constructor(
    private apiService: ApiService,
    private newsProvider: NewsProvider
  ) {
    this.news = []
  }

  page: number = 1

  pageSize: number = 7

  loading: boolean = true

  ngOnInit(): void {
    const cacheNews = this.newsProvider.getNewsDataCache
    this.news = cacheNews.map((item: any) => Object.assign([], item))

    if (this.news.length > 0) {
      // Set loading to false when the data (cacheNews) is not empty
      this.loading = false
    } else {
      // Load all news when the data is empty
      this.getNewsAll()
    }
  }

  getNewsAll() {
    this.apiService
      .getNewsItemInRange()
      .pipe(
        map((data) => {
          // convert time data
          data.time = moment.unix(data.time).fromNow()
          return data
        })
      )
      .subscribe((data) => {
        this.news.push(data)
        // set new cache for news on the first load
        this.newsProvider.setNewsDataCache(data)
      })
      .add(() => {
        this.loading = false
      })
  }
}
