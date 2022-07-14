import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root',
})
export class NewsProvider {
  public newsDataCache: any = []

  setNewsDataCache(data: any) {
    // store passed data to global vars
    this.newsDataCache.push(data)
  }

  get getNewsDataCache() {
    // return stored data
    return this.newsDataCache
  }
}
