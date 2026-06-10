import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {

  authService = inject(AuthService);

  loginForm = new FormGroup({
    email : new FormControl(''),
    password : new FormControl(''),
  });

  handleSubmit() {
    const email = this.loginForm.controls.email;
    const password = this.loginForm.controls.password;

    if(! (email.value && password.value) ) {
      console.log("Empty fields found");
      return;
    }


    this.authService.login( email.value, password.value);

    email.reset('');
    password.reset('');
  }
}
