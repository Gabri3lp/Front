import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { StartComponent } from './start/start.component';
import { AuthGuardService } from './auth-guard.service';
import { LogoutComponent } from './logout/logout.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  { path: 'users', component: UsersComponent, canActivate: [AuthGuardService] },
  { path: '', component: StartComponent, canActivate: [AuthGuardService] },
  { path: 'logout', component: LogoutComponent},
  { path: 'login', component: LoginComponent}
];
@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ],
})
export class AppRoutingModule {

}