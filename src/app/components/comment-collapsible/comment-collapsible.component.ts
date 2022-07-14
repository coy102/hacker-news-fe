import { Component, Input, OnInit } from '@angular/core'
import * as moment from 'moment'
import { ApiService } from 'src/app/services/api-service.service'
import { NewsItems } from 'src/app/services/types/news'

@Component({
  selector: 'app-comment-collapsible',
  templateUrl: './comment-collapsible.component.html',
  styleUrls: ['./comment-collapsible.component.css'],
})
export class CommentCollapsibleComponent implements OnInit {
  @Input() level!: number

  @Input() id!: number

  public newsData!: NewsItems

  public isOpen: boolean

  public hasComment: boolean

  constructor(private apiService: ApiService) {
    this.isOpen = false
    this.hasComment = false
  }

  ngOnInit(): void {
    // get news detail by id
    this.apiService.getNewsDetail(this.id).subscribe((data) => {
      this.newsData = {
        ...data,
        time: moment.unix(data.time).fromNow(),
      }
      this.hasComment = true
    })
  }

  toggleColapse() {
    this.isOpen = !this.isOpen
  }
}
