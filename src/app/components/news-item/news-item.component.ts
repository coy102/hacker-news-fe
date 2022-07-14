/* eslint-disable prefer-destructuring */
import { Component, Input, OnInit } from '@angular/core'

@Component({
  selector: 'app-news-item',
  templateUrl: './news-item.component.html',
  styleUrls: ['./news-item.component.css'],
})
export class NewsItemComponent implements OnInit {
  @Input() index!: number

  @Input() id!: number

  @Input() title!: string

  @Input() url!: any

  @Input() score!: number

  @Input() by!: string

  @Input() time!: number

  @Input() commentsCount!: number

  ngOnInit(): void {}
}
