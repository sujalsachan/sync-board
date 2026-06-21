import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),

    //withComponentInputBinding() : automatic mapping of params to the input decorators defined in the component
    provideRouter(routes, withComponentInputBinding()),
  ]
};
