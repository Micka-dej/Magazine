import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticlesSplashComponent } from './articles-splash.component';

describe('ArticlesSplashComponent', () => {
  let component: ArticlesSplashComponent;
  let fixture: ComponentFixture<ArticlesSplashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticlesSplashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticlesSplashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
