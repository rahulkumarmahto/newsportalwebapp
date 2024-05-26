import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NewsArticleService } from '../services/news-article.service';
import { ButtonModule } from 'primeng/button';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-news-article-delete',
  standalone: true,
  imports: [ButtonModule],
  templateUrl: './news-article-delete.component.html',
  styleUrl: './news-article-delete.component.scss'
})
export class NewsArticleDeleteComponent implements OnInit {

  newsArticleId: number = 0;

  constructor(private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private messageService : MessageService,
    private newsArticleService: NewsArticleService
  ) {
  }
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.newsArticleId = Number.parseInt(params.get('id') ?? "0");
    });
  }

  DeleteNewsArticle() {
    this.newsArticleService.deleteById(this.newsArticleId).subscribe(res => {
      this.messageService.add({ severity: 'success', summary: 'success', detail: "Record delete successfully", life: 3000 });
    },
      error => {
        console.error(error);
        this.messageService.add({ severity: 'error', summary: 'Error', detail: error, life: 3000 });
      });
  }
  CancelDeleteNewsArticle() {
    this.router.navigateByUrl("/NewsArticle/List");
  }
}
