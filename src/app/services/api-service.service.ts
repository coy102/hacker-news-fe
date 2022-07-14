import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { map, Observable, retry, mergeMap, from, shareReplay } from 'rxjs'
import { environment } from 'src/environments/environment'

import { NewsFeed, NewsItems } from './types/news'

@Injectable()
export class ApiService {
  BASE_API_HOST = environment.baseHostApi

  private $news!: Observable<number[]>

  private $newsAll!: Observable<any>

  constructor(private http: HttpClient) {}

  getNews(): Observable<number[]> {
    if (!this.$news) {
      this.$news = this.http
        .get<number[]>(`${this.BASE_API_HOST}/askstories.json`)
        .pipe(retry(3))
        .pipe(
          map((data) => data),
          shareReplay(1)
        )
    }

    return this.$news
  }

  getNewsDetail(id: number): Observable<NewsItems> {
    return this.http
      .get<NewsItems>(`${this.BASE_API_HOST}/item/${id}.json`)
      .pipe(retry(3))
      .pipe(map((data) => data))
  }

  getNewsItemInRange(): Observable<NewsFeed> {
    if (!this.$newsAll) {
      this.$newsAll = this.getNews()
        .pipe(mergeMap((data) => from(data)))
        .pipe(mergeMap((data) => this.getNewsDetail(data)))
        .pipe(
          map((data) => ({
            item: data,
            count: 0,
          }))
        )
    }
    return this.$newsAll
  }

  getNewsComment(commentId: number): Observable<NewsItems> {
    return this.http
      .get<NewsItems>(`${this.BASE_API_HOST}/item/${commentId}.json`)
      .pipe(retry(3))
      .pipe(map((data) => data))
  }
}
