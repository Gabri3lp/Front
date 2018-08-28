import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { DataBaseService } from '../database.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  private users: User[]; 
  constructor(private dataBase: DataBaseService) { }

  ngOnInit() {
    this.dataBase.getUsers().subscribe(users => this.users = users);
  }
  create(){

  }
  delete(email: string){
    var result = false;
    this.dataBase.deleteUser(email).subscribe(response => result = response);
    if(result){
      alert("Usuario borrado con éxito");
    }else{
      alert("Ocurrió un error al borrar el usuario");
    }
  }
  update(){

  }
  select(){
    
  }

}
