import { Component, OnInit, Input } from '@angular/core';
import { User } from '../user';
import { DataBaseService } from '../database.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  private users: User[]; 
  @Input() search = '';
  constructor(private dataBase: DataBaseService) { }


  ngOnInit() {
    this.dataBase.getUsers().subscribe(users => this.users = users);
  }
  delete(id: string){
    this.dataBase.deleteUser(id).subscribe(response =>{
      if(response){
        alert("Usuario borrado con éxito");
        for (let i = 0; i < this.users.length; i++) {
          if(this.users[i].id == id)
            this.users.splice(i, 1);
        }
      }else{
        alert("Ocurrió un error al borrar el usuario");
      }
    });
    
  }
  
  searchUsers(){
    this.dataBase.getUsers(this.search).subscribe(users => this.users = users);
  }
  keyDown(event){
    if(event.keyCode == 13)
      this.searchUsers();
  }

}
