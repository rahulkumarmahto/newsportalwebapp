import { Component, OnInit } from '@angular/core';
import { TableModule } from 'primeng/table';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { ButtonModule } from 'primeng/button';
import { HttpClientModule } from '@angular/common/http';
import { NewsArticleService } from '../services/news-article.service';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar'
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-news-articles',
  standalone: true,
  imports: [TableModule, IconFieldModule, InputIconModule, HttpClientModule, ButtonModule, ToastModule, ToolbarModule],
  templateUrl: './news-articles.component.html',
  styleUrl: './news-articles.component.scss'
})
export class NewsArticlesComponent implements OnInit {

  newsArticles: any[] = [];
  loading: boolean = true;
  rowsToDisplay: number = 5;
  totalCount: number = 0;
  itemsCount: number = 0;
  matchingRecordCount: number = 0;

  constructor(
    private router: Router,
    private messageService: MessageService,
    private newsArticleService: NewsArticleService) {
  }

  ngOnInit(): void {
    this.loading = true;
  }

  loadNewsArticles(event: any) {
    this.loading = true;
    let searchText = '';
    let pageIndex = 1;
    let sortBy = 'CreatedDateTime';
    let sortDirection = "DESC";
    let pageSize = event.rows;
    this.rowsToDisplay = event.rows ?? 5;

    if (event.first)
      pageIndex = event.first == 0 ? 1 : (event.first / event.rows) + 1;

    if (event.globalFilter || event.sortField) {
      sortBy = event.sortField ?? 'CreatedDateTime';
      sortDirection = event.sortOrder == 1 ? "ASC" : "DESC";
      pageSize = event.rows;

      if (event.filters.global) {
        searchText = event.filters.global.value
      }
    }

    setTimeout(() => {
      var queryParameters = {
        searchText: searchText,
        pageIndex: pageIndex,
        sortBy: sortBy,
        sortDirection: sortDirection,
        pageSize: pageSize
      };

      this.newsArticleService.getByQueryParameters(queryParameters).subscribe(res => {
        this.newsArticles = res.items ?? [];
        this.totalCount = res.totalCount;
        this.matchingRecordCount = res.matchingRecordCount;
        this.loading = false;
      },
        error => {
          console.error(error);
        })
    }, 1000);

  }

  addNewNewsArticle() {
    this.router.navigateByUrl("/NewsArticle/Manage/0");
  }

  editNewsArticle(request: any) {
    this.router.navigateByUrl("/NewsArticle/Manage/" + request.id);
  }

  deleteNewsArticle(request: any) {
    this.router.navigateByUrl("/NewsArticle/Delete/" + request.id);
  }
}
