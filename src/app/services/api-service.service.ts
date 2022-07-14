import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { map, Observable, retry, mergeMap, from } from 'rxjs'
import { environment } from 'src/environments/environment'

import { NewsItems } from './types/news'

@Injectable()
export class ApiServiceService {
  BASE_API_HOST = environment.baseHostApi

  private cacheFeedSize: number

  constructor(private http: HttpClient) {
    this.cacheFeedSize = 0
  }

  getNews(): Observable<number[]> {
    return this.http
      .get<number[]>(`${this.BASE_API_HOST}/askstories.json`)
      .pipe(retry(3))
      .pipe(map((data) => data))
  }

  getNewsDetail(id: number): Observable<NewsItems[]> {
    return this.http
      .get<NewsItems[]>(`${this.BASE_API_HOST}/item/${id}.json`)
      .pipe(retry(3))
      .pipe(map((data) => data))
  }

  getFeedItemInRange(startCount: number): Observable<any> {
    return this.getNews()
      .pipe(mergeMap((data) => from(data)))
      .pipe(mergeMap((data) => this.getNewsDetail(data)))
      .pipe(
        map((data) => ({
          item: data,
          count: this.cacheFeedSize,
        }))
      )
  }
}
