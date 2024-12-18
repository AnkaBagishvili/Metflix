import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HeaderComponent } from './core/components/header/header.component';
import { BrowseComponent } from './pages/browse/browse.component';
import { ErrorComponent } from './pages/error/error.component';
import { SearchbarComponent } from './pages/searchbar/searchbar.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '',
    component: HeaderComponent,
    children: [
      {
        path: 'browse',
        component: BrowseComponent,
      },
      {
        path: 'tv-shows',
        component: ErrorComponent,
      },
      {
        path: 'movies',
        component: SearchbarComponent,
      },
    ],
  },
];
