import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

import { HttpClientModule } from '@angular/common/http';
import { MessageComponent } from './message/message.component';
import { AppRoutingModule } from './/app-routing.module';
import { MenuComponent } from './menu/menu.component';
import { StartComponent } from './start/start.component';
import { LogoutComponent } from './logout/logout.component';
import { UsersComponent } from './users/users.component';
import { UserDataComponent } from './user-data/user-data.component';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HeaderInterceptor } from './header-interceptor';
import { HoursComponent } from './hours/hours.component';
import { HourDataComponent } from './hour-data/hour-data.component';
import { ReportsComponent } from './reports/reports.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MessageComponent,
    MenuComponent,
    StartComponent,
    LogoutComponent,
    UsersComponent,
    UserDataComponent,
    HoursComponent,
    HourDataComponent,
    ReportsComponent,
  ],
  imports: [
    BrowserModule,
  	FormsModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [
    {
    provide: HTTP_INTERCEPTORS,
    useClass: HeaderInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
