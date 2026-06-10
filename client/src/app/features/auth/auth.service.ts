import { Service, signal, Signal } from "@angular/core";
import { User } from "./user.model";

@Service() 
export class AuthService {
    defaultUser : User= {
        name:"Sujal",
        email : "sujal@gmail.com",
        password : "12345678",
    };

    user = signal<User | null>(null);

    login(email:string, password:string) {
        this.user.set({
            ...this.defaultUser,
            email : email,
            password : password,
        })

        console.log(this.user());
    }
}