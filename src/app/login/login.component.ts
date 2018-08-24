import { Component, OnInit } from '@angular/core';
import {LoginService} from '../login.service';
import { MessageService } from '../message.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
	  email = "gabriel.jp215@gmail.com";
	  pass = "12345678";
    token = null;
  	constructor(private loginService: LoginService,
                private messageService: MessageService,
                private router: Router ) {
    }

  	ngOnInit() {
      if(this.loginService.hasToken()){
        this.router.navigate(['/'], { queryParams: {}});
      }
  	}
    public login(event: KeyboardEvent = null){
      if(event == null){
        this.loginService.logIn(this.email, this.pass).subscribe(response => {
          if(response['status'] == 'success'){
            this.token = response['token'];
          }else{
            this.messageService.show({type: response['error'], content: response['message']});
          }
        });
      }else{
        if(event.key == "Enter"){
          this.loginService.logIn(this.email, this.pass).subscribe(response => {
            if(response['status'] == 'success'){
              this.token = response['token'];
            }else{
              this.messageService.show({type: response['error'], content: response['message']});
            }
          });
        }
      }
    }
}
