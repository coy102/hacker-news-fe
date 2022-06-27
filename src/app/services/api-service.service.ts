import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { environment } from 'src/environments/environment'

import { NewsItems } from './types/news'

@Injectable({
  providedIn: 'root',
})
export class ApiServiceService {
  BASE_API_HOST = environment.baseHostApi

  constructor(private http: HttpClient) {}

  getNews(): Observable<number[]> {
    return this.http.get<number[]>(`${this.BASE_API_HOST}/askstories.json`)
  }

  getNewsDetail(id: number): Observable<NewsItems[]> {
    return this.http.get<NewsItems[]>(`${this.BASE_API_HOST}/item/${id}.json`)
  }
}
