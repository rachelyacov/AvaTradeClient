import { Component, ElementRef } from '@angular/core';
import { LoginService } from './login.service';

import { FormBuilder, FormGroup, Validators, FormControl, NgForm, ValidationErrors, ValidatorFn, AbstractControl } from '@angular/forms';
import { Injectable } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Login AvaTrade';

  constructor(private loginService: LoginService) {
  }

  form = new FormGroup({
    "userName": new FormControl("", Validators.required),
    "password": new FormControl("", [
      Validators.required,
      Validators.minLength(8),
      Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{1,}')

    ]),
  });





  onSubmit() {

    this.loginService.CheckLoginUser(this.form.value)
      .subscribe(data => {
        console.log(data)
        if (data.isBlocked)
          alert('The user is blocked');
        else if (data.isLoginSuccess)
          alert('The login was successful');
        else
          alert('Invalid username and password');

      })

  }



}
