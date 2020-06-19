import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InspirationArticleComponent } from './inspiration-article.component';

describe('InspirationArticleComponent', () => {
  let component: InspirationArticleComponent;
  let fixture: ComponentFixture<InspirationArticleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InspirationArticleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InspirationArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
