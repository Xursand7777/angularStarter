import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { UsersComponent } from './pages/users/users.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'users',
        pathMatch: 'full'
    },
    {
      path: 'home',
      component: HomeComponent,
      title:'Home'
    },
    {
        path: 'users',
        component: UsersComponent,
        title: 'Users'
    }
];
