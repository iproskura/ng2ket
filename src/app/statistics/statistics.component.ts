import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {
  stats =  stats;

  constructor() { }

  ngOnInit() {
  }

}

class Stats {
  id: number;
  count: number;
  message: string;
  imgSrc: string;
}

const stats: Stats[] = [
  {
    id: 1,
    message: 'completed projects',
    count: 3054,
    imgSrc: 'stat_01.png',
  }, {
    id: 2,
    message: 'clicks presed',
    count: 934873,
    imgSrc: 'stat_02.png',
  }, {
    id: 3,
    message: 'mails send & recived',
    count: 4670,
    imgSrc: 'stat_03.png',
  }, {
    id: 4,
    message: 'jokes told',
    count: 939,
    imgSrc: 'stat_04.png',
  },
];

