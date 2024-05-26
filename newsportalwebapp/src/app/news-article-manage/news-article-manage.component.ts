import { Component, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';
import { InputTextModule } from 'primeng/inputtext';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MessageService, SelectItem } from 'primeng/api';
import { DropdownModule } from 'primeng/dropdown';
import { NewsArticleService } from '../services/news-article.service';
import { NewsCategoryService } from '../services/news-category.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-news-article-manage',
  standalone: true,
  imports: [InputTextModule, ButtonModule, ToastModule, ToolbarModule, FormsModule, ReactiveFormsModule, DropdownModule],
  templateUrl: './news-article-manage.component.html',
  styleUrl: './news-article-manage.component.scss'
})
export class NewsArticleManageComponent implements OnInit {

  batchSearchFormGroup: FormGroup;
  academicSession: any = {};
  newsCategorySelectItemList: SelectItem[] = [];

  newsArticleId: number = 0;

  constructor(private fb: FormBuilder,
    private route: ActivatedRoute,
    private messageService : MessageService,
    private newsArticleService: NewsArticleService,
    private newsCategoryService: NewsCategoryService
  ) {

    this.batchSearchFormGroup = this.fb.group({
      id: 0,
      title: ['', Validators.required],
      description: ['', Validators.required],
      newsCategory: ['', Validators.required],
      newsCategoryId: ['', Validators.required],
      newsCategoryName: ['', Validators.required],
      createdBy: [''],
      createdDateTime: [''],
      modifiedBy: [''],
      modifiedDateTime: [''],
    });
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.newsArticleId = Number.parseInt(params.get('id') ?? "0");
      if (this.newsArticleId != 0) {
        this.getById(this.newsArticleId);
      }
    });

    this.getNewsCategories();
  }



  getNewsCategories() {
    this.newsCategoryService.get().subscribe(res => {
      for (var i = 0; i < res.length; i++) {
        this.newsCategorySelectItemList.push({ label: res[i].name, value: res[i].id });
      }

      console.log(this.newsCategorySelectItemList);
    }, error => {
      console.error(error);
      this.messageService.add({ severity: 'error', summary: 'Error', detail: error, life: 3000 });
    })
  }

  getById(id: number) {
    this.newsArticleService.getById(id).subscribe(x => {
      this.batchSearchFormGroup.patchValue(x);
    },
  error=>{
    this.messageService.add({ severity: 'error', summary: 'Error', detail: error, life: 3000 });
  });
  }
  SaveNewsArticle() {

    var request = this.batchSearchFormGroup.value;
    request.modifiedDateTime = new Date();

    if (this.newsArticleId == 0) {
      request.newsCategoryId = this.batchSearchFormGroup.value.newsCategory.value;
      this.newsArticleService.add(request).subscribe(response => {
        this.messageService.add({ severity: 'success', summary: 'success', detail: "Record added successfully", life: 3000 });
      },
        error => {
          console.error(error);
          this.messageService.add({ severity: 'error', summary: 'Error', detail: error, life: 3000 });
        });
    }
    else {
      request.id = this.newsArticleId;
      request.newsCategoryId = this.batchSearchFormGroup.value.newsCategoryId;
      this.newsArticleService.updateById(this.newsArticleId, request).subscribe(response => {
        this.messageService.add({ severity: 'success', summary: 'success', detail: "Record updated successfully", life: 3000 });
      },
        error => {
          console.error(error);
          this.messageService.add({ severity: 'error', summary: 'Error', detail: error, life: 3000 });
        });
    }
  }

  onSubmit() {

  }
}
