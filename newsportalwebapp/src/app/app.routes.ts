import { Routes } from '@angular/router';
import { NewsArticlesComponent } from './news-articles/news-articles.component';
import { NewsArticleViewComponent } from './news-article-view/news-article-view.component';
import { NewsArticleManageComponent } from './news-article-manage/news-article-manage.component';
import { NewsArticleDeleteComponent } from './news-article-delete/news-article-delete.component';
import { NewsCategoriesComponent } from './news-categories/news-categories.component';
import { NewsCategoryViewComponent } from './news-category-view/news-category-view.component';
import { NewsCategoryManageComponent } from './news-category-manage/news-category-manage.component';
import { NewsCategoryDeleteComponent } from './news-category-delete/news-category-delete.component';

export const routes: Routes = [
    { path: '', component: NewsArticlesComponent },
    { path: 'NewsArticle/List', component: NewsArticlesComponent },
    { path: 'NewsArticle/View/:id', component: NewsArticleViewComponent },
    { path: 'NewsArticle/Manage/:id', component: NewsArticleManageComponent },
    { path: 'NewsArticle/Delete/:id', component: NewsArticleDeleteComponent },

    { path: 'NewsCategory/List', component: NewsCategoriesComponent },
    { path: 'NewsCategory/View/:id', component: NewsCategoryViewComponent },
    { path: 'NewsCategory/Manage/:id', component: NewsCategoryManageComponent },
    { path: 'NewsCategory/Delete/:id', component: NewsCategoryDeleteComponent }
];
