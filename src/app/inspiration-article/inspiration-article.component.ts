import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-inspiration-article",
  templateUrl: "./inspiration-article.component.html",
  styleUrls: ["./inspiration-article.component.scss"]
})
export class InspirationArticleComponent implements OnInit {
  @Input() title: string;
  @Input() text: string;
  @Input() publishDate: string;
  @Input() backgroundUrl: string;
  @Input() remainingTime: string;

  constructor() {}

  ngOnInit() {}
}
