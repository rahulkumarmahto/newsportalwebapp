import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsArticleViewComponent } from './news-article-view.component';

describe('NewsArticleViewComponent', () => {
  let component: NewsArticleViewComponent;
  let fixture: ComponentFixture<NewsArticleViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewsArticleViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewsArticleViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
