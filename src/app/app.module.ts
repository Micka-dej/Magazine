import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";
import { MatIconModule } from "@angular/material";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { InspirationComponent } from './inspiration/inspiration.component';
import { SimpleArticleComponent } from './simple-article/simple-article.component';
import { InspirationCategoryComponent } from './inspiration-category/inspiration-category.component';
import { InspirationArticleComponent } from './inspiration-article/inspiration-article.component';
import { ArticlesSplashComponent } from './articles-splash/articles-splash.component';
import { FooterComponent } from './footer/footer.component';
import { ArticlePageComponent } from './article-page/article-page.component';
import { HomeComponent } from './home/home.component';
import { EventComponent } from './event/event.component';
import { EventArticleComponent } from './event-article/event-article.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { EventArticlePageComponent } from './event-article-page/event-article-page.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, InspirationComponent, SimpleArticleComponent, InspirationCategoryComponent, InspirationArticleComponent, ArticlesSplashComponent, FooterComponent, ArticlePageComponent, HomeComponent, EventComponent, EventArticleComponent, SearchBarComponent, EventArticlePageComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
