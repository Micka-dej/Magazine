import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { ArticlePageComponent } from "./article-page/article-page.component";
import { EventComponent } from "./event/event.component";
import { EventArticlePageComponent } from "./event-article-page/event-article-page.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "article-page", component: ArticlePageComponent },
  { path: "event", component: EventComponent },
  { path: "event-article-page", component: EventArticlePageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
