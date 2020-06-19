import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventArticleComponent } from './event-article.component';

describe('EventArticleComponent', () => {
  let component: EventArticleComponent;
  let fixture: ComponentFixture<EventArticleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventArticleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
