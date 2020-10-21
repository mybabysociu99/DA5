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
  addClass(val:any){
    return this.http.post(this.APIUrl+'/Classes',val)
  }
  updateClass(val:any){
    return this.http.put(this.APIUrl+'/Classes',val)
  }
  deleteClass(val:any){
    return this.http.delete(this.APIUrl+'/Classes/',val)
  }

  // students
  getStulist():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/students');
  }
  addStudents(val:any){
    return this.http.post(this.APIUrl+'/students',val)
  }
  updateStudents(val:any){
    return this.http.put(this.APIUrl+'/students',val)
  }
  deleteStudents(val:any){
    return this.http.delete(this.APIUrl+'/Scores/',val)
  }
  // Point
  getPoilist():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/Scores');
  }
  addPoi(val:any){
    return this.http.post(this.APIUrl+'/Scores',val)
  }
  updatePoi(val:any){
    return this.http.put(this.APIUrl+'/Scores',val)
  }
  deletePoi(val:any){
    return this.http.delete(this.APIUrl+'/Scores/',val)
  }
  //Receipt
  getReclist():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/Receipts');
  }
  addRec(val:any){
    return this.http.post(this.APIUrl+'/Receipts',val)
  }
  updateRec(val:any){
    return this.http.put(this.APIUrl+'/Receipts',val)
  }
  deleteRec(val:any){
    return this.http.delete(this.APIUrl+'/Receipts/',val)
  }
  constructor(private http:HttpClient) {}
}

