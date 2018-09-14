import { Component, OnInit, Input } from '@angular/core';
import { DataBaseService } from '../database.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {
  @Input() initialDate = null;
  @Input() finalDate = null;
  fileTotalReady = false;
  fileDetailedReady = false;
  fileTotalUrl;
  fileDetailedUrl;
  
  constructor(
    private dataBase: DataBaseService,
    private sanitizer: DomSanitizer) { }

  ngOnInit() {
  }
  generateTotalReport(){
    this.fileTotalReady = false;
    this.dataBase.generateTotalReport(this.initialDate, this.finalDate).subscribe(result => {
      if(result != null){
        this.fileTotalUrl = this.sanitizer.bypassSecurityTrustResourceUrl(window.URL.createObjectURL(result));
        this.fileTotalReady = true;
      }
    });
  }

}
