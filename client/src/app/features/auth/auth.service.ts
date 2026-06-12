import { inject, Service, signal, Signal } from "@angular/core";
import { User } from "./user.model";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../environment";

@Service() 
export class AuthService {
    user = signal<User | null>(null);
    http = inject(HttpClient);
    url = environment.BACKEND_URL + '/auth';

    authError = signal<string>('');

    login(data: {}) {
        
        this.http.post(this.url+'/login', data).subscribe({
            next: (response) => {
                console.log('Login Success', response);
            }, 
            error:(err) => {
                console.log('Login Failed', err);
            } 
        })

        console.log(this.user());
    }

    signup(data : {}) {
         this.http.post(this.url + '/signup', data).subscribe({
      next: (response) => {
        console.log('Sign Up success');
      },
      error: (err) => {
        console.log('Sign Up failed: error :', err);
        this.authError.set('Signup Failed. Please try again later.')
      },
    });
    }
}