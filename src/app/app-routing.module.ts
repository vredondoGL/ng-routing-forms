import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent, PageNotFoundComponent } from './views';
import { LoginComponent } from './views/login/login.component';
import { UsersListComponent } from './views/users/users-list.component';
import { AuthGuard } from './views/login/auth-guard.service';
import { UserProfileComponent } from './views/users/user-profile/user-profile.component';
import { UserResolver } from './views/users/user-resolver.service';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'users',
    canActivate: [ AuthGuard ],
    children: [
      {
        path: '',
        component: UsersListComponent,
      }, {
        path: ':id',
        component: UserProfileComponent,
        resolve: { user: UserResolver }
      }
    ]
  },
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [UserResolver]
})
export class AppRoutingModule { }
