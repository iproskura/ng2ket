import { Component, OnInit, ViewChild } from "@angular/core";
import { FormGroup, FormBuilder, Validator, Validators, NgForm, FormControl } from "@angular/forms";
import { Contact } from "./contact";
import { Cookie } from 'ng2-cookies/ng2-cookies'
import { setupTestingRouter } from "@angular/router/testing";

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent{
  usernameCtrl: FormControl;
  usermailCtrl: FormControl;
  usermessageCtrl: FormControl;
  userForm: FormGroup;


  constructor(fb: FormBuilder){
    this.usernameCtrl = fb.control(Cookie.get('username'), Validators.compose([Validators.required, Validators.minLength(3)]));
    this.usermailCtrl = fb.control(Cookie.get('email'), Validators.compose([Validators.required]));
    this.usermessageCtrl  = fb.control('', Validators.required);
    this.userForm = fb.group({
      username: this.usernameCtrl,
      email: this.usermailCtrl,
      message: this.usermessageCtrl
    });
  }



  register(){
    Cookie.set('username', this.userForm.value.username, 10);
    Cookie.set('email', this.userForm.value.email, 10);
    console.log(this.userForm.value);
  }
}

/*
Validators.pattern('/^\w+@[a-zA-Z_]+?\.[a-zA-Z]+$/')
*/
