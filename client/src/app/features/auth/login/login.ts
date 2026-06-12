import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
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
    email : new FormControl('', Validators.required),
    password : new FormControl('', Validators.required),
  });

  handleSubmit() {
    const loginData = this.loginForm.value;

    if(! (loginData.password && loginData.email) ) {
      console.log("Empty fields found");
      return;
    }

    const data = {
      email : loginData.email,
      password : loginData.password,
    }

    console.log('login ts', data);
    this.authService.login( data );
  }
}
