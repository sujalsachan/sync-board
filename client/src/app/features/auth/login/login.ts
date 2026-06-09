import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  loginForm = new FormGroup({
    email : new FormControl(''),
    password : new FormControl(''),
  });

  handleSubmit() {
    const email = this.loginForm.controls.email;
    const password = this.loginForm.controls.password;

    console.log("Form Submitted: ", email.value, password.value)
  }
}
