import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services1',
  templateUrl: './services1.component.html',
  styleUrls: ['./services1.component.css']
})
export class Services1Component implements OnInit {
  messageId: number;

  services: Service[] = [{
    id: 1,
    name: 'web',
    src: 'service_00.png'
  }, {
    id: 2,
    name: 'design',
    src: 'service_01.png'
  }, {
    id: 3,
    name: 'programming',
    src: 'service_02.png'
  }, {
    id: 4,
    name: 'photography',
    src: 'service_03.png'
  }
  ];

  constructor() {
  }

  ngOnInit() {
  }

  showMessage(id){
    this.messageId = id;
  }
}

class Service {
  id: number;
  name: string;
  src: string
}
