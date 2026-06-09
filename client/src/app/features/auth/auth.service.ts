import { Service, signal, Signal } from "@angular/core";

@Service() 
export class AuthService {
    user = signal(null);
}