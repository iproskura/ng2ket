import { Component, OnInit } from "@angular/core";
import { Contact } from "./contact";

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  model = new Contact(1, 'Ingwar', 'ingwar@gmail.com', new Date());
  submitted = false;

  constructor() {
  }

  ngOnInit() {
  }

  onSubmit() {
    this.submitted = true;
  }

  get diagnostic() {
    return JSON.stringify(this.model)
  }
}
