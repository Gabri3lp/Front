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
  delete(id: string){
    this.dataBase.deleteUser(id).subscribe(response =>{
      if(response){
        alert("Usuario borrado con éxito");
        window.location.reload();
      }else{
        alert("Ocurrió un error al borrar el usuario");
      }
    });
    
  }
  update(){

  }
  select(){
    
  }

}
