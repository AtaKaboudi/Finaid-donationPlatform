import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { from, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {DashboardComponent} from './dashboard/dashboard.component'

@Injectable({
  providedIn: 'root'
})
export class WebRequestService {
  
  constructor(private http : HttpClient) {
   
   };

  fetchWebData (){
   this.http.get("http://localhost:3000/initiative").toPromise().then( (res)=>{
   }
   
   )
}

}
