export interface NewsItems {
  by: string
  descendants: number
  id: number
  kids: number[]
  score: number
  text: string
  time: any
  title: string
  type: string
}

export interface NewsFeed {
  item: NewsItems
  count: number
}
