import { Component, OnInit, ViewChild } from "@angular/core";
import { Contact } from "./contact";
import { FormGroup, FormBuilder, Validator, Validators, NgForm } from "@angular/forms";
import { setupTestingRouter } from "@angular/router/testing";

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  submitted = false;
  contact: Contact;
  contactForm: NgForm;
  @ViewChild('contactForm')
  currentForm: NgForm;

  formErrors = {
    'name': '',
    'email': ''
  };

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {

  }

  onSubmit() {
    this.submitted = true;
    this.contact = this.contactForm.value;
  }

  ngAfterViewChecked() {
    this.formChanged();
  }

  formChanged() {
    if (this.currentForm === this.contactForm) {
      return;
    }

    this.contactForm = this.currentForm;
    if (this.contactForm) {
      this.contactForm.valueChanges
        .subscribe(data => this.onValueChanged(data));
    }
  }

  onValueChanged(data?: any) {
    if (!this.contactForm) {
      return
    }
    const form = this.contactForm.form;

    for (const field in this.formErrors) {
      this.formErrors[field] = '';
      const control = form.get(field);

      if (control && control.dirty && !control.valid) {
        const messages = this.validationMessage[field];
        for (const key in control.errors) {
          this.formErrors[field] += messages[key] + ' ';
        }
      }
    }
  }

  validationMessage = {
    name: {
      'required': 'Name is required.',
      'minlength': 'Name must be at least 4 chars long.',
      'maxlength': 'Name cannot bo more than 20 chars long.',
      'forbiddenName': 'Someone named "Bob" cannot be a hero.'
    },
    email: {
      'required': 'email is required.'
    }
  }

  get diagnostic() {
    // return JSON.stringify(this.model)
  }
}
