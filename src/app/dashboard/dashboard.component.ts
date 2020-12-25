import { HttpClient } from '@angular/common/http';
import { Component, Injector, OnInit } from '@angular/core';
import {WebRequestService} from '../web-request.service'
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
 initiatives : any = [] ;
 cards : any = [];
stats : any = [];
f:any;
  constructor(private http : HttpClient) {
   }

applyFilter(a){
  this.fetchWebData("http://localhost:3000/initiative/"+a);

}
search(a){
  this.fetchWebData("http://localhost:3000/initiative/"+a);

}

   
   
  ngOnInit(): void { 
   this.fetchWebData("http://localhost:3000/initiative");
  }


  fetchWebData (url){
    
    this.http.get(url).toPromise().then( (res)=>{
      this.initiatives = res 
      console.log(this.initiatives);
    })
    this.http.get("http://localhost:3000/utils/stats").toPromise().then( (res)=>{
      this.stats = res 
      console.log(this.stats);
    })
    this.http.get("http://localhost:3000/utils/topEvents").toPromise().then( (res)=>{
      this.cards = res 
      console.log(this.stats);
    })

  }

  
 
  testButton(){
    console.log("testVutton");
   }

}
/*
<div class="container-fluid" style ="border: 2px solid #555555;">
    <div style ="display: inline-block; ">
    <img class="cardImage" src ="https://images.pexels.com/photos/1687093/pexels-photo-1687093.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940">
    <img class="cardImage"  src ="https://images.pexels.com/photos/4663829/pexels-photo-4663829.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940">
        <h1 class="cardTitle">Ecological</h1>
        <h1 class="cardTitle" style=" left:27%;">Social</h1>
        <h1 class="cardTitle" style="left:52%;">Sport</h1>
        <h1  class="cardTitle" style="left:78%;">Culture</h1>

    </div>
</div>
*/