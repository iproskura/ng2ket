import { Component, OnInit } from "@angular/core";
import { Contact } from "./contact";

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  powers = [
    'Cute',
    'Really smart',
    'Handsome',
    'Weather Chandger',
    'Superman',
    'Supergirl'];

  model = new Contact(1, 'Ingwar', 'ingwar@gmail.com', new Date(), this.powers[4]);
  submitted = false;

  onSubmit() {
    this.submitted = true;
  }

  get diagnostic() {
    return JSON.stringify(this.model)
  }

}
