import { Component, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service'

@Component({
  selector: 'app-diem',
  templateUrl: './diem.component.html',
  styleUrls: ['./diem.component.css']
})
export class DiemComponent implements OnInit {

  constructor(private sharedService:SharedService) { }
  diem:any;
    ngOnInit(): void {
      this.sharedService.getPoilist().subscribe((update)=>this.diem=update)
    }
  

}
