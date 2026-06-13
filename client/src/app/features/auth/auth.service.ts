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
        
        this.http.post<User>(this.url+'/login', data).subscribe({
            next: (response) => {
                console.log('Login Success');
                this.user.set(response);
            }, 
            error:(err) => {
                console.log('Login Failed : ', err.error.message);
            } 
        })
    }

    signup(data : {}) {
         this.http.post<User>(this.url + '/signup', data).subscribe({
      next: (response) => {
        console.log('Sign Up success', response);
        this.user.set(response);
      },
      error: (err) => {
        console.log('Sign Up failed: error :', err);
        this.authError.set('Signup Failed. Please try again later.')
      },
    });
    }
}