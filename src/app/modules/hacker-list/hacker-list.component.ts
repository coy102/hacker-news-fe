import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
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

  page: number = 1

  public pageSize: number = 20

  public loading: boolean = true

  constructor(
    private apiService: ApiService,
    private newsProvider: NewsProvider,
    private router: Router
  ) {
    this.news = []
  }

  ngOnInit(): void {
    const cacheNews = this.newsProvider.getNewsDataCache
    this.news = cacheNews.map((item: any) => Object.assign([], item))

    if (this.news.length > 0) {
      this.loading = false
    } else {
      this.getNewsAll()
    }
  }

  getNewsAll() {
    this.apiService
      .getNewsItemInRange()
      .pipe(
        map((data) => {
          data.time = moment.unix(data.time).fromNow()
          return data
        })
      )
      .subscribe((data) => {
        this.news.push(data)
        this.newsProvider.setNewsDataCache(data)
      })
      .add(() => {
        this.loading = false
      })
  }
}
