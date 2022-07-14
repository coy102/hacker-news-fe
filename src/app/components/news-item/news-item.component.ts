/* eslint-disable prefer-destructuring */
import { Component, Input, OnInit } from '@angular/core'

@Component({
  selector: 'app-news-item',
  templateUrl: './news-item.component.html',
  styleUrls: ['./news-item.component.css'],
})
export class NewsItemComponent implements OnInit {
  @Input() index: number

  @Input() id: number

  @Input() title: string

  @Input() url: string

  @Input() score: number

  @Input() by: string

  @Input() time: number

  @Input() commentsCount: number

  constructor() {
    this.index = 0
    this.id = 0
    this.title = ''
    this.url = ''
    this.by = ''
    this.time = 0
    this.score = 0
    this.commentsCount = 0
  }

  ngOnInit(): void {}
}
