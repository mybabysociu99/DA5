import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';//khai báo để sử dụng được modal 
import {SharedService} from 'src/app/shared.service'
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-diem',
  templateUrl: './diem.component.html',
  styleUrls: ['./diem.component.css']
})
export class DiemComponent implements OnInit {

  //khai báo một viewchild show sau khi được click
  @ViewChild('addAndEdit') public addAndEdit: ModalDirective;
  constructor(private sharedService:SharedService) { }
  diem:any;
  //khai báo một biến để chứa dữ liệu khi sửa
  public entity : any;
  //khai báo một biến để phân biệt thêm và sửa
  public hidenID: any;
  //
  ngOnInit(): void {
    this.loadData();
  }
  loadData(){
    this.sharedService.getclasslist().subscribe((update)=>this.diem=update);
  }
  //funcrtion open modal
  showAdd(){
    this.entity ={}; //khi sử dụng cho việc thêm, gán một đối tượng rỗng cho entity
    this.hidenID = 0;//gán giá trị 0 cho hidenID
    //show modal
    this.addAndEdit.show();
  }
  showEdit(id : any){
    this.hidenID = 1;
    this.sharedService.getPoiItem(id).subscribe(res=>{
      this.entity = res;
    });
    this.addAndEdit.show();
  }
  deleteItem(id : any){
    let confirm = "Bạn có muốn xóa không?";
    if(confirm){
      this.sharedService.deletePoi(id).subscribe(res=>{
        alert("Xóa thành công!");
        this.loadData();
      });
    }
   
  }
  save(val : any){
    //nếu hidenID = 0 thì là hàm xóa
    if(this.hidenID == 0){
      this.sharedService.addPoi(val).subscribe(res=>{
        alert("thêm thành công!");
        //đóng modal
        this.addAndEdit.hide();
        //load lại dữ liệu
        this.loadData();
      });
    }
    //nếu không thì sửa
    else{
      this.sharedService.updatePoi(val.scoresId,val).subscribe(res=>{
        alert("sửa thành công!");
        //đóng modal
        this.addAndEdit.hide();
        this,this.loadData();
      })
    }
  }
}