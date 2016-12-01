import { Component, OnInit } from "@angular/core";
import { NewsService } from "./news.service";
import { Article } from "./article";

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  news: Article[];
  newsLimit = 7;

  constructor(private newsService: NewsService) {
  }

  ngOnInit() {
    this.getNews();
  }

  getNews(): void {
    this.news = this.newsService.getNews();
  }

  readMore(id): void {
    console.log('readMore(id: ' + this.news[id].id +'), { ' + this.news[id].description + '}');
  }

}
