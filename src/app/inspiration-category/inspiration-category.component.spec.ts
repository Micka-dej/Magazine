import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InspirationCategoryComponent } from './inspiration-category.component';

describe('InspirationCategoryComponent', () => {
  let component: InspirationCategoryComponent;
  let fixture: ComponentFixture<InspirationCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InspirationCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InspirationCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
