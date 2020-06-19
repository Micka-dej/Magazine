import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-simple-article",
  templateUrl: "./simple-article.component.html",
  styleUrls: ["./simple-article.component.scss"]
})
export class SimpleArticleComponent implements OnInit {
  @Input() title: string;
  @Input() text: string;
  @Input() publishDate: string;
  @Input() backgroundUrl: string;
  @Input() size: string;

  constructor() {}

  ngOnInit() {}
}
