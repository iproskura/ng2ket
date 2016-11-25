import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { NgModule } from "@angular/core";

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
import { Ng2PageScrollModule } from "ng2-page-scroll";

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
    TeamComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    Ng2PageScrollModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
