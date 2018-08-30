import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { StartComponent } from './start/start.component';
import { AuthGuardService } from './auth-guard.service';
import { LogoutComponent } from './logout/logout.component';
import { UsersComponent } from './users/users.component';
import { UserDataComponent } from './user-data/user-data.component';

const routes: Routes = [
  { path: '', component: StartComponent, canActivate: [AuthGuardService] },
  { path: 'logout', component: LogoutComponent},
  { path: 'login', component: LoginComponent},
  { path: 'users', component: UsersComponent, canActivate: [AuthGuardService] },
  { path: 'users/:type/:id', component: UserDataComponent, canActivate: [AuthGuardService]},
  { path: 'users/:type', component: UserDataComponent, canActivate: [AuthGuardService]},
];
@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ],
})
export class AppRoutingModule {

}