import { inject, Service, signal, Signal } from "@angular/core";
import { User } from "./user.model";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../environment";
import { Router } from "@angular/router";

@Service() 
export class AuthService {

    http = inject(HttpClient);
    router = inject(Router);

    authError = signal<string>('');
    user = signal<User | null>(null);
    url = environment.BACKEND_URL + '/auth';

    login(data: {}) {
        
        this.http.post<User>(this.url+'/login', data).subscribe({
            next: (response) => {
                this.user.set(response);
                console.log("User id : ", response._id);
                this.router.navigate(['/']);
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
                console.log(response);
                this.router.navigate(['/']);
            },
            error: (err) => {
                console.log('Sign Up failed: error :', err);
                this.authError.set('Signup Failed. Please try again later.')
            },
        });
    }
}