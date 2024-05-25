import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsCategoryViewComponent } from './news-category-view.component';

describe('NewsCategoryViewComponent', () => {
  let component: NewsCategoryViewComponent;
  let fixture: ComponentFixture<NewsCategoryViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewsCategoryViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewsCategoryViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
