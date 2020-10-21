import { Component, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service'

@Component({
  selector: 'app-phieuthu',
  templateUrl: './phieuthu.component.html',
  styleUrls: ['./phieuthu.component.css']
})
export class PhieuthuComponent implements OnInit {

  constructor(private sharedService:SharedService) { }
  pth:any;
    ngOnInit(): void {
      this.sharedService.getReclist().subscribe((update)=>{
        this.pth=update
        debugger
      }
        )
  }
}
