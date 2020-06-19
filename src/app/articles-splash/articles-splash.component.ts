import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-articles-splash",
  templateUrl: "./articles-splash.component.html",
  styleUrls: ["./articles-splash.component.scss"]
})
export class ArticlesSplashComponent implements OnInit {
  @Input() title: string;
  @Input() text: string;
  @Input() button: string;
  @Input() backgroundUrl: string;
  @Input() direction: string;

  constructor() {}

  ngOnInit() {}
}
