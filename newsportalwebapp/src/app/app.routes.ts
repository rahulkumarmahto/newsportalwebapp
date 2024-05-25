import { Routes } from '@angular/router';
import { NewsArticlesComponent } from './news-articles/news-articles.component';
import { NewsArticleViewComponent } from './news-article-view/news-article-view.component';
import { NewsArticleManageComponent } from './news-article-manage/news-article-manage.component';
import { NewsArticleDeleteComponent } from './news-article-delete/news-article-delete.component';

export const routes: Routes = [
    { path: '', component: NewsArticlesComponent },
    { path: 'list', component: NewsArticlesComponent },
    { path: 'View/:id', component: NewsArticleViewComponent },
    { path: 'Manage/:id', component: NewsArticleManageComponent },
    { path: 'Delete/:id', component: NewsArticleDeleteComponent }
];
