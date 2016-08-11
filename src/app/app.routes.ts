import { RouterConfig } from '@angular/router';
import { AppComponent } from './app.component';

export const routes: RouterConfig = [
  { path: '', component: AppComponent },
  { path: '**', redirectTo: '' }
];
