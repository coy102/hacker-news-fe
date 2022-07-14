/* eslint-disable no-return-assign */
import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { map, Observable, retry, mergeMap, from, shareReplay } from 'rxjs'
import { environment } from 'src/environments/environment'

import { NewsItems } from './types/news'

@Injectable()
export class ApiService {
  BASE_API_HOST = environment.baseHostApi

  private $news!: Observable<number[]>

  constructor(private http: HttpClient) {}

  // get news list
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

  // get news detail by id
  getNewsDetail(id: number): Observable<NewsItems> {
    return this.http
      .get<NewsItems>(`${this.BASE_API_HOST}/item/${id}.json`)
      .pipe(retry(3))
      .pipe(map((data) => data))
  }

  // get news all with merged detail data
  getNewsItemInRange(): Observable<NewsItems> {
    return this.getNews()
      .pipe(mergeMap((data) => from(data)))
      .pipe(mergeMap((data) => this.getNewsDetail(data)))
      .pipe(map((data) => data))
  }
}
