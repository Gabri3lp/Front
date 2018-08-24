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

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MessageComponent,
    MenuComponent,
    StartComponent,
    LogoutComponent,
    UsersComponent,
  ],
  imports: [
    BrowserModule,
  	FormsModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
