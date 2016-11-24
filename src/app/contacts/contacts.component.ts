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
    this.usernameCtrl = fb.control('', Validators.compose([Validators.required, Validators.minLength(3)]));
    this.usermailCtrl = fb.control('', Validators.compose([Validators.required, Validators.pattern('/[a-zA-Z0-9_@.]+$/')]));
    this.usermessageCtrl  = fb.control('', Validators.required);
    this.userForm = fb.group({
      username: this.usernameCtrl,
      email: this.usermailCtrl,
      message: this.usermessageCtrl
    });
  }

  register(){
    console.log(this.userForm.value);
  }
}
