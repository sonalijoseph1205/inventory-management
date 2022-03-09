import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/toPromise';
import { SalesData } from './salesdata.model';

@Injectable({
  providedIn: 'root'
})
export class SalesDataServiceService {



  constructor(private http: HttpClient) { 
    
  }

  public viewData(data: any)
  {
    return this.http.post('http://localhost:3000/viewdata/',data,{
      withCredentials: true })
  }

  public getData(data:any){
   return this.http.post('http://localhost:3000/getdata/',data,{
    withCredentials: true })
  }
}
