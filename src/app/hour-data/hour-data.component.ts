import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataBaseService } from '../database.service';
import { Location } from '@angular/common';
import { Hour } from '../hour';

@Component({
  selector: 'app-hour-data',
  templateUrl: './hour-data.component.html',
  styleUrls: ['./hour-data.component.css']
})
export class HourDataComponent implements OnInit {
  @Input() hour = new Hour();
  disabled = true;
  showPass: boolean;
  type: string;
  id: string;
  title: string;
  showTotal: boolean;
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
      this.title = "Agregar";
      this.id = this.route.snapshot.paramMap.get('id');
      if(this.id != '0'){
        this.hour.user_id = this.id;
      }
      return;
    }
    if(this.type == 'edit'){
      this.disabled = false;
      this.showPass = true;
      this.title = "Editar";
    }
    if(this.type == 'get'){
      this.title = "Detalles";
      this.showTotal = true;
    }
    this.id = this.route.snapshot.paramMap.get('id');
    this.dataBase.getHourById(this.id).subscribe(hour => this.hour = hour);
  }

  submit(){
    switch(this.type){
      case 'edit':{
        this.dataBase.updateHour(this.hour).subscribe(response =>{
          if(response){
            alert("Guardado con exito");
            this.router.navigate(['/hours']);
          }
        });
        break;
      }
      case 'create':{
        this.dataBase.createHour(this.hour).subscribe(response => {
          if(response){
            alert("Hora creada con exito");
            this.router.navigate(['/hours']);
          }
        });
        break;
      }
      case "get":{
        this.router.navigate(['/hours']);
      }
    }
  }
  cancel(){
    this.router.navigate(['/hours']);
  }
  setNewStatus(status: string){
    this.hour.status = status;
  }

}
