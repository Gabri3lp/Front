import { Component, OnInit, Input } from '@angular/core';
import { Hour } from '../hour';
import { DataBaseService } from '../database.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-hours',
  templateUrl: './hours.component.html',
  styleUrls: ['./hours.component.css']
})
export class HoursComponent implements OnInit {
  
  private hours: Hour[]; 
  constructor(
    private route: ActivatedRoute,
    private dataBase: DataBaseService,) { }
  @Input() search = '';
  id: string;

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    if(this.id != ''){
      this.dataBase.getHours(this.id).subscribe(hours => {
       hours.forEach(hour => {
        var n = new Date(0,0);
        n.setMinutes(+hour.total * 60); 
        var result = n.setMinutes(+hour.total * 60); 
        hour.total = n.toTimeString().slice(0, 5);
       });
       this.hours = hours;
      });
    }else{
      this.dataBase.getHours("").subscribe(hours => this.hours = hours);
    }
  }
  delete(id: string){
    this.dataBase.deleteHour(id).subscribe(response =>{
      if(response){
        alert("Hora extra borrada con éxito");
        for (let i = 0; i < this.hours.length; i++) {
          if(this.hours[i].id == id)
            this.hours.splice(i, 1);
        }
      }
    });
  }
 
  searchHours(){
    this.dataBase.getHours(this.search).subscribe(hours => this.hours = hours);
  }
  keyDown(event){
    if(event.keyCode == 13)
      this.searchHours();
  }


}
