import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsCategoryManageComponent } from './news-category-manage.component';

describe('NewsCategoryManageComponent', () => {
  let component: NewsCategoryManageComponent;
  let fixture: ComponentFixture<NewsCategoryManageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewsCategoryManageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewsCategoryManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
