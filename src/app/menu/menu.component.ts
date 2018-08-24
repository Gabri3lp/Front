import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import {LoginService} from '../login.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  constructor(private loginService: LoginService,
              private router: Router) { }
              
  @Input() selected: number;
  startClass = "nav-link";
  usersClass = "nav-link";
  hoursClass = "nav-link";
  reportsClass = "nav-link";
  configClass = "nav-link";
  
  ngOnInit() {
    switch(this.selected){
      case 1:{
        this.startClass += " active";
        break;
      } case 2:{
        this.usersClass += " active";
        break;
      } case 3:{
        this.hoursClass += " active";
        break;
      } case 4:{
        this.reportsClass += " active";
        break;
      } case 5:{
        this.configClass += " active";
        break;
      }
    }
  }

}
