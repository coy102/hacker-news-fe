import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import * as moment from 'moment'
import { ApiService } from 'src/app/services/api-service.service'
import { NewsItems } from 'src/app/services/types/news'

@Component({
  selector: 'app-hacker-detail',
  templateUrl: './hacker-detail.component.html',
  styleUrls: ['./hacker-detail.component.css'],
})
export class HackerDetailComponent implements OnInit {
  public newsData!: NewsItems

  public loadingItem: boolean = true

  constructor(private apiService: ApiService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    // get news detail by route param (id)
    this.route.params.subscribe((params: any) => {
      this.apiService
        .getNewsDetail(params.id)
        .subscribe((data) => {
          this.newsData = {
            ...data,
            time: moment.unix(data.time).fromNow(),
          }
        })
        .add(() => {
          this.loadingItem = false
        })
    })
  }
}
