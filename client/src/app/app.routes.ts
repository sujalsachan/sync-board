import { Routes } from '@angular/router';
import { Boards } from './features/boards/boards';
import { NotFound } from './features/not-found/not-found';
import { Homepage } from './features/homepage/homepage';
import { Login } from './features/auth/login/login';
import { Signup } from './features/auth/signup/signup';

export const routes: Routes = [
    {
        path:'',
        component:Homepage,
    },
    {
        path:'boards',
        component:Boards,
    },
    {
        path:'login',
        component:Login
    },
    {
        path:'signup',
        component:Signup
    },
    {
        path:'**',
        component:NotFound,
    },
];
