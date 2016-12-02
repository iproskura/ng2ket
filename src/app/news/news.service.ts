import { Injectable } from "@angular/core";
import { Article } from "./article";
import { NEWS } from "./mock-news";

@Injectable()
export class NewsService {
  _news: Article[];
  news: Article[] = [];


  constructor() {
  }

  getNews(): Article[] {
    this._news = NEWS;

    for (let i = 0; i < this._news.length; i++) {
      let _n = this._news;
      this.news.push({id: _n[i].id, date: new Date(_n[i].date), description: _n[i].description, text: _n[i].text});

      // console.log(_n[i]);
    }

    console.log();

    return this.news;
  }
}
