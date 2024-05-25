import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsArticleDeleteComponent } from './news-article-delete.component';

describe('NewsArticleDeleteComponent', () => {
  let component: NewsArticleDeleteComponent;
  let fixture: ComponentFixture<NewsArticleDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewsArticleDeleteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewsArticleDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
