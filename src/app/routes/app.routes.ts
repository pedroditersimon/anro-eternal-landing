import { Routes } from '@angular/router';
import { LINKS } from './links';

export const routes: Routes = [
  {
    path: LINKS.home.path,
    title: 'Anro Eternal',
    loadComponent: () => import('../features/landing/pages/home/home.page').then((m) => m.HomePage)
  },
  { path: '**', redirectTo: LINKS.home.build() }
];
