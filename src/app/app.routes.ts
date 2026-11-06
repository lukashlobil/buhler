import { Routes } from '@angular/router';
import { Overview } from './pages/overview/overview';

export const routes: Routes = [
  { path: '', component: Overview },
  { path: '**', redirectTo: '' },
];
