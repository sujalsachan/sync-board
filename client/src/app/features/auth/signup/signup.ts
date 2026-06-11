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

  isLoading = false;

  handleSubmit() {
    console.log('Signing Up');
    this.isLoading = true;

    const signupData = this.signUpForm.controls;

    this.http.post(this.url+'/signup', signupData).subscribe({
      next: (response) => {
        console.log('User Created');
      },
      error: (err) => {
        console.log('User not created, error :', err  );
      },
    })

    setTimeout(() => {
    this.isLoading = false;
    }, 2000);

    console.log(signupData)
    console.log(this.url+'/signup')
    
  }
}
