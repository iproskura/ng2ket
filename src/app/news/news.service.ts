import { Injectable } from "@angular/core";
import { Article } from "./article";
import { NEWS } from "./mock-news";

@Injectable()
export class NewsService {

  constructor() {
  }

  getNews(): Article[] {
    return NEWS;
  }
}
