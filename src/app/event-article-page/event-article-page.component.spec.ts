import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventArticlePageComponent } from './event-article-page.component';

describe('EventArticlePageComponent', () => {
  let component: EventArticlePageComponent;
  let fixture: ComponentFixture<EventArticlePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventArticlePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventArticlePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
