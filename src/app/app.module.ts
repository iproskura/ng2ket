import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { Services1Component } from './services1/services1.component';
import { Services2Component } from './services2/services2.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { AboutComponent } from './about/about.component';
import { NewsComponent } from './news/news.component';
import { ContactsComponent } from './contacts/contacts.component';
import { FooterComponent } from './footer/footer.component';
import { TeamComponent } from './team/team.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    Services1Component,
    Services2Component,
    PortfolioComponent,
    StatisticsComponent,
    AboutComponent,
    NewsComponent,
    ContactsComponent,
    FooterComponent,
    TeamComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
