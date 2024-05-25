import { Component, OnInit } from '@angular/core';
import { TableModule } from 'primeng/table';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { HttpClientModule } from '@angular/common/http';
import { NewsArticleService } from '../services/news-article.service';

@Component({
  selector: 'app-news-articles',
  standalone: true,
  imports: [TableModule, IconFieldModule, InputIconModule, HttpClientModule],
  templateUrl: './news-articles.component.html',
  styleUrl: './news-articles.component.scss'
})
export class NewsArticlesComponent implements OnInit {


  newsArticles: any[] = [];
  cols: any[] = [];
  loading: boolean = true;
  rowsToDisplay?: number;
  totalCount?: number;
  itemsCount?: number;
  matchingRecordCount?: number;

  constructor(private newsArticleService: NewsArticleService) {

  }
  ngOnInit(): void {
    this.loading = true;
  }
  loadNewsArticles(event: any) {
    this.loading = true;
    let searchText = '';
    let pageIndex = 1;
    if (event.first)
      pageIndex = event.first == 0 ? 1 : (event.first / 10) + 1;

    let sortBy = 'CreatedDateTime';
    let sortDirection = "DESC";
    let pageSize = event.rows;
    this.rowsToDisplay = event.rows ?? 5;

    // if (event.globalFilter || event.sortField) {
    //   sortBy = event.sortField[0] ?? 'CreatedDateTime';
    //   sortDirection = event.sortOrder == 1 ? "ASC" : "DESC";
    //   pageSize = event.rows;

    //   if (event.filters && event.filters.global) {
    //     searchText = event.filters.global.value
    //   }
    // }

    setTimeout(() => {

      var queryParameters = {
        searchText: '',
        pageIndex: pageIndex,
        sortBy: sortBy,
        sortDirection: sortDirection,
        pageSize: pageSize
      };

      this.newsArticleService.getById(1).subscribe(res => {
        console.log(res);

      }, error => {
        console.error(error);
      });

      this.newsArticleService.getByQueryParameters(queryParameters).subscribe(res => {
        this.newsArticles = res.items ?? [];
        this.totalCount = res.totalCount;
        if (event.globalFilter || event.sortField) {
          this.matchingRecordCount = res.itemsCount;
        } else {
          this.matchingRecordCount = res.totalCount;
        }

        this.loading = false;
      },
        error => {
          console.error(error);
        })
    }, 1000);

  }

  editNewsArticle(request: any) {
  }

  deleteNewsArticle(request: any) {
  }

}
