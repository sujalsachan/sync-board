import { Routes } from '@angular/router';
import { NotFound } from './features/not-found/not-found';
import { Homepage } from './features/homepage/homepage';
import { Login } from './features/auth/login/login';
import { Signup } from './features/auth/signup/signup';
import { boardRoutes } from './features/boards/board.routes.js';

export const routes: Routes = [
  {
    path: '',
    component: Homepage,
  },
  {
    path: 'login',
    component: Login,
  },
  {
    path: 'signup',
    component: Signup,
  },
  {
    path: 'boards',
    loadChildren: () => import('./features/boards/board.routes').then((m) => m.boardRoutes),
  },
  {
    path: '**',
    component: NotFound,
  },
];
