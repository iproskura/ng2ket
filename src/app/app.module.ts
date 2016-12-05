import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { NgModule, LOCALE_ID } from "@angular/core";

import { Counto } from 'angular2-counto/angular2-counto';
import { Ng2PageScrollModule } from "ng2-page-scroll";

import { AboutComponent } from "./about/about.component";
import { AppComponent } from "./app.component";
import { ContactsComponent } from "./contacts/contacts.component";
import { FooterComponent } from "./footer/footer.component";
import { HeaderComponent } from "./header/header.component";
import { NewsComponent } from "./news/news.component";
import { PortfolioComponent } from "./portfolio/portfolio.component";
import { Services1Component } from "./services1/services1.component";
import { Services2Component } from "./services2/services2.component";
import { StatisticsComponent } from "./statistics/statistics.component";
import { TeamComponent } from "./team/team.component";
import { NewsService } from "./news/news.service";
import { LimitToPipe } from './limit-to.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactsComponent,
    FooterComponent,
    HeaderComponent,
    NewsComponent,
    Services1Component,
    Services2Component,
    PortfolioComponent,
    StatisticsComponent,
    TeamComponent,
    Counto,
    LimitToPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    Ng2PageScrollModule.forRoot()
  ],
  providers: [
    NewsService,
    {provide: LOCALE_ID, useValue: 'uk-UA'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
