import { Component, inject, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  imports: [ReactiveFormsModule],
  templateUrl: './signup.html',
  styleUrl: './signup.scss',
})
export class Signup {

  authService = inject(AuthService);

  signUpForm = new FormGroup({
    name: new FormControl('', Validators.required),
    phoneNumber: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    confirmPassword: new FormControl('', Validators.required),
  });

  isLoading = signal<boolean>(false);

  handleSubmit() {
    console.log('Signing Up');
    this.isLoading.set(true);

    const newUser = {
      name : this.signUpForm.value.name,
      email : this.signUpForm.value.email,
      phone : this.signUpForm.value.phoneNumber,
      password : this.signUpForm.value.password
    }

    this.authService.signup(newUser);

    setTimeout(() => {
      this.isLoading.set(false);
      this.authService.authError.set('');
    }, 2000);

    console.log(newUser);
  }
}
