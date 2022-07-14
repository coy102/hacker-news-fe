import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import * as moment from 'moment'
import { map, mergeMap } from 'rxjs'
import { ApiService } from 'src/app/services/api-service.service'

@Component({
  selector: 'app-hacker-list',
  templateUrl: './hacker-list.component.html',
  styleUrls: ['./hacker-list.component.css'],
})
export class HackerListComponent implements OnInit {
  public news: any

  public newsTotal!: number

  private subscription: any

  public page!: number

  public totalPages!: number

  constructor(
    private apiService: ApiService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.news = []
  }

  ngOnInit(): void {
    this.subscription = this.route.queryParams
      .pipe(
        mergeMap((params: any) => {
          this.news = []
          this.page = +params.p || 1
          return this.apiService.getNewsItemInRange(this.page * 10 - 9)
        })
      )
      .pipe(
        map((data) => {
          data.item.time = moment.unix(data.item.time).fromNow()
          return data
        })
      )
      .subscribe((data) => {
        this.news.push(data)
        this.totalPages = Math.floor((data.count + 9) / 10)
        this.newsTotal = data.count - 1
      })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }

  nextPage() {
    this.router.navigate(['/list'], {
      queryParams: {
        p: Math.min(this.totalPages, this.page + 1),
      },
    })
  }

  prevPage() {
    this.router.navigate(['/list'], {
      queryParams: {
        p: Math.max(1, this.page - 1),
      },
    })
  }
}
