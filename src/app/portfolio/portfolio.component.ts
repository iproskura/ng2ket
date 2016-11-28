import { Component, OnInit } from "@angular/core";

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  portfolio = portfolioes;
  selection: number = 0;
  categories = categories;

  constructor() {
  };

  ngOnInit() {
  };

  selector(sel :number){
    this.selection = sel;
  }

} //endof portfolioComponent

const categories = ['all', 'web', 'design', 'photography'];

class Portfolio {
  category: string;
  imgSrc: string;
}

const portfolioes: Portfolio[] = [
  {
    category: categories[1],
    imgSrc: 'team2.png'
  }, {
    category: categories[2],
    imgSrc: 'team3.png'
  }, {
    category: categories[3],
    imgSrc: 'team4.png'
  }, {
    category: categories[2],
    imgSrc: 'team3.png'
  }, {
    category: categories[1],
    imgSrc: 'team2.png'
  }, {
    category: categories[3],
    imgSrc: 'team4.png'
  }, {
    category: categories[2],
    imgSrc: 'team3.png'
  }, {
    category: categories[1],
    imgSrc: 'team2.png'
  }, {
    category: categories[2],
    imgSrc: 'team3.png'
  }, {
    category: categories[1],
    imgSrc: 'team2.png'
  }, {
    category: categories[3],
    imgSrc: 'team4.png'
  }, {
    category: categories[2],
    imgSrc: 'team3.png'
  }
];
