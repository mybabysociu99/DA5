import { Component, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service'

@Component({
  selector: 'app-lop',
  templateUrl: './lop.component.html',
  styleUrls: ['./lop.component.css']
})
export class LopComponent implements OnInit {

  constructor(private sharedService:SharedService) { }
lop:any;
  ngOnInit(): void {
    this.sharedService.getclasslist().subscribe((update)=>this.lop=update)
  }

}
