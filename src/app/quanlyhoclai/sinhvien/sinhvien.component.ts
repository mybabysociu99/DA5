import { Component, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service'

@Component({
  selector: 'app-sinhvien',
  templateUrl: './sinhvien.component.html',
  styleUrls: ['./sinhvien.component.css']
})
export class SinhvienComponent implements OnInit {

  constructor(private sharedService:SharedService) { }
  stu:any;
    ngOnInit(): void {
      this.sharedService.getStulist().subscribe((update)=>this.stu=update)
    }

}
