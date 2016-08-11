// Angular 2 Universal
import { bootstrap } from '@angular/platform-browser-dynamic';
import { provideRouter } from '@angular/router';
import { HTTP_PROVIDERS } from '@angular/http';
import { FIREBASE_PROVIDERS, defaultFirebase } from 'angularfire2';
// Application
import {MyHomeComponent} from './app/my-home.component';
import {routes} from './app/app.routes';

// you must return bootstrap for client.ts
export function ngApp() {
  return bootstrap(MyHomeComponent, [
    ...HTTP_PROVIDERS,
    FIREBASE_PROVIDERS,
    defaultFirebase({
      apiKey: "AIzaSyCuZX-I6UUcUi4kCFE9_EtxWjQ8NLndQy4",
      authDomain: "proair-web.firebaseapp.com",
      databaseURL: "https://proair-web.firebaseio.com",
      storageBucket: "proair-web.appspot.com",
    }),
    provideRouter(routes)
  ]);
}
