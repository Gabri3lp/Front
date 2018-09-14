import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import {LoginService} from '../login.service';
import { User } from '../user';
import { DataBaseService } from '../database.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  constructor(private loginService: LoginService,
              private router: Router,
              private dataBase: DataBaseService) { }
              
  @Input() selected: number;
  startClass = "nav-link";
  usersClass = "nav-link";
  hoursClass = "nav-link";
  reportsClass = "nav-link";
  configClass = "nav-link";
  title = '';
  currentUser = new User();
  ngOnInit() {
    this.dataBase.getCurrentUser().subscribe(response => this.currentUser = response);
    switch(this.selected){
      case 1:{
        this.title = 'Inicio';
        this.startClass += " active";
        break;
      } case 2:{
        this.title = 'Usuarios';
        this.usersClass += " active";
        break;
      } case 3:{
        this.title = 'Horas Extra';
        this.hoursClass += " active";
        break;
      } case 4:{
        this.title = 'Reportes';
        this.reportsClass += " active";
        break;
      } case 5:{
        this.title = 'Config';
        this.configClass += " active";
        break;
      }
    }
  }

}
