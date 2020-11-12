import { Injectable } from '@angular/core';
//import { from } from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
const httpOptions={
  headers: new HttpHeaders({'Content-Type':'application/json'})
};
@Injectable({
  providedIn: 'root'
})
export class SharedService {
  readonly APIUrl = "https://localhost:44337/api";

 

  getclasslist():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/Classes');
  }
  getClassItem(id: any){
    return this.http.get(this.APIUrl + '/Classes/' + id);
  }
  addClass(val:any){
    return this.http.post(this.APIUrl+'/Classes',val)
  }
  updateClass(id: any,val:any){
    return this.http.put(this.APIUrl + '/Classes/' + id,val);
  }
  deleteClass(id:any){
    return this.http.delete(this.APIUrl+'/Classes/' + id)
  }

  // students
  getStulist():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/students');
  }
  getStuItem(id: any){
    return this.http.get(this.APIUrl + '/students/' + id);
  }
  addStudents(val:any){
    return this.http.post(this.APIUrl+'/students',val)
  }
  updateStudents(id: any,val:any){
    return this.http.put(this.APIUrl + '/students/' + id,val);
  }
  deleteStudents(id:any){
    return this.http.delete(this.APIUrl+'/students/' + id)
  }
  // Point
  getPoilist():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/Scores');
  }
  getPoiItem(id: any){
    return this.http.get(this.APIUrl + '/Scores/' + id);
  }
  addPoi(val:any){
    return this.http.post(this.APIUrl+'/Scores',val)
  }
  updatePoi(id: any,val:any){
    return this.http.put(this.APIUrl + '/Scores/' + id,val);
  }
  deletePoi(id:any){
    return this.http.delete(this.APIUrl+'/Scores/' + id)
  }
  //Receipt
  getReclist():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/Receipts');
  }
  getRecItem(id: any){
    return this.http.get(this.APIUrl + '/Receipts/' + id);
  }
  addRec(val:any){
    return this.http.post(this.APIUrl+'/Receipts',val)
  }
  updateRec(id: any,val:any){
    return this.http.put(this.APIUrl + '/Receipts/' + id,val);
  }
  deleteRec(id:any){
    return this.http.delete(this.APIUrl+'/Receipts/' + id)
  }
  constructor(private http:HttpClient) {}
}

