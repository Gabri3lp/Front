import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { User } from '../user';
import { DataBaseService } from '../database.service';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.css']
})
export class UserDataComponent implements OnInit {
  @Input() user = new User();
  disabled = true;
  showPass: boolean;
  type: string;
  email: string;
  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private dataBase: DataBaseService,
    private router: Router
  )  { }

  ngOnInit() {
    this.type = this.route.snapshot.paramMap.get('type');
    if(this.type == 'create'){
      this.disabled = false;
      this.showPass = true;
      return;
    }
    if(this.type == 'edit'){
      this.disabled = false;
      this.showPass = true;
    }
    this.email = this.route.snapshot.paramMap.get('email');
    this.dataBase.getUserByEmail(this.email).subscribe(user => this.user = user);
  }
  submit(){
    switch(this.type){
      case 'edit':{
        this.dataBase.updateUser(this.user, this.email).subscribe(response =>{
          if(response)
            alert("Guardado con exito");
          else{
            alert("Hubo un problema al guardar el usuario");
          this.router.navigate(['/users']);
          return;
          }
        });
        break;
      }
      case 'create':{
        this.dataBase.createUser(this.user).subscribe(response => {
          if(response){
            alert("Usuario creado con exito");
            this.router.navigate(['/users']);
          }
          else{
            alert("Hubo un problema al crear el usuario");
          return;
          }
        });
        
        break;
      }
    }
  }
  cancel(){
    this.router.navigate(['/users']);
  }

}
