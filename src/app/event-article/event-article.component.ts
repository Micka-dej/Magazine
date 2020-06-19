import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-event-article",
  templateUrl: "./event-article.component.html",
  styleUrls: ["./event-article.component.scss"]
})
export class EventArticleComponent implements OnInit {
  @Input() title: string;
  @Input() subTitle: string;
  @Input() text: string;
  @Input() place: string;
  @Input() backgroundUrl: string;
  @Input() remainingTime: string;

  constructor() {}

  ngOnInit() {}
}
