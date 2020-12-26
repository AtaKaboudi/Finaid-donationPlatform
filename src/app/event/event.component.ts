import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { timeout } from 'rxjs/operators';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {
 eventId ;
 eventInfo : any ;
 charityInfo: any;
  constructor(private route :ActivatedRoute,private http: HttpClient) { }
 
   ngOnInit(): void {
    this.eventId = this.route.snapshot.params['id'];
    this.fetchWebData();
  }


 async  addComment(Addedcomment){
   await this.eventInfo.comments.push(Addedcomment);
    this.http.post("http://localhost:3000/initiative/comment", {id:this.eventId,comments:this.eventInfo.comments}).toPromise();
  }
  rate( a: number){
 this.http.post("http://localhost:3000/charity/rating",{name : this.charityInfo.name, rating:a}).toPromise().then((res: any)=>console.log(res));
  
  }
  async fetchWebData(){

    await this.http.get ("http://localhost:3000/initiative/"+this.eventId).toPromise().then((res)=>{
      this.eventInfo = res[0];
    console.log(this.eventInfo);
    })

   await this.http.get ("http://localhost:3000/charity/name/"+this.eventInfo.charity).toPromise().then((res)=>{
      this.charityInfo = res[0];
    console.log(this.charityInfo);
    })
  }

}
