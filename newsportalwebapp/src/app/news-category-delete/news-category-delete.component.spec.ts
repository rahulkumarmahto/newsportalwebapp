import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsCategoryDeleteComponent } from './news-category-delete.component';

describe('NewsCategoryDeleteComponent', () => {
  let component: NewsCategoryDeleteComponent;
  let fixture: ComponentFixture<NewsCategoryDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewsCategoryDeleteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewsCategoryDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
