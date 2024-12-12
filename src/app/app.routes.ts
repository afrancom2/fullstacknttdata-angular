import {Routes} from '@angular/router';

export const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {
    path: 'login',
    loadComponent: () => import('./login/login.component').then((m) => m.LoginComponent),
  },
  {
    path: 'home',
    loadComponent: () =>
      import('./view-information/view-information.component').then(
        (m) => m.ViewInformationComponent
      ),
  },
];
