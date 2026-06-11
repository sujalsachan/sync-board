import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { environment } from '../../../../environment';
import { email } from '@angular/forms/signals';

@Component({
  selector: 'app-signup',
  imports: [ReactiveFormsModule],
  templateUrl: './signup.html',
  styleUrl: './signup.scss',
})
export class Signup {

  http = inject(HttpClient);
  url = environment.BACKEND_URL+'/auth';

  signUpForm = new FormGroup({
    name : new FormControl('', Validators.required),
    phoneNumber : new FormControl('', Validators.required),
    email : new FormControl('', Validators.required),
    password : new FormControl('', Validators.required),
    confirmPassword : new FormControl('', Validators.required),
  })

  handleSubmit() {
    console.log('Signing Up');
    const { confirmPassword, ...signupData } = this.signUpForm.value;

    this.http.post(this.url+'/signup', signupData);
  }
}
