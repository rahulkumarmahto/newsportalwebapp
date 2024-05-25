import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsArticleManageComponent } from './news-article-manage.component';

describe('NewsArticleManageComponent', () => {
  let component: NewsArticleManageComponent;
  let fixture: ComponentFixture<NewsArticleManageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewsArticleManageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewsArticleManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
