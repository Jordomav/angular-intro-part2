import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from '../../components/home/home.component';
import { LoginComponent } from '../../components/login/login.component';
import { RegisterComponent } from '../../components/register/register.component';
import { UsersComponent } from '../../components/users/users.component';
import { NotFoundComponent } from '../../components/not-found/not-found.component';
import { GithubComponent } from '../../components/github/github.component';
import { AdminComponent } from '../../components/admin/admin.component';
import { AuthGuardService } from '../../services/auth-guard.service';
import { AdminAuthGuardService } from '../../services/admin-auth-guard.service';


import { ProfileModule } from '../profile/profile.module';
import { serializePath } from '@angular/router/src/url_tree';
import { Services } from '@angular/core/src/view';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'admin', component: AdminComponent, canActivate: [AdminAuthGuardService, AuthGuardService] },
  { path: 'users', component: UsersComponent },
  { path: 'github', component: GithubComponent },
  { path: 'user/:id', loadChildren: () => ProfileModule },
  { path: 'github', component: GithubComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
