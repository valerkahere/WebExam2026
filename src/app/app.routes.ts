import { Routes } from '@angular/router';
import { Countries } from './components/countries/countries';
import { About } from './components/about/about';

export const routes: Routes = [
  { path: '', component: Countries},
  {path: 'about', component: About}
];
