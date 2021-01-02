import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-manager',
  templateUrl: './event-manager.component.html',
  styleUrls: ['./event-manager.component.scss']
})
export class EventManagerComponent implements OnInit {
 @Input() charityName ;
 @Input() eventsArray ;
 eventDisplayed='';
 eventInfo ;
 inputForm : boolean = false

  constructor(private http : HttpClient) { }

  showEvent(eventName){
   this.http.get('http://localhost:3000/initiative/namesAll/'+eventName+'/'+this.charityName).toPromise().then((res)=>{
     this.eventInfo = res[0];
     console.log(this.eventInfo);
   });
    this.eventDisplayed= eventName ;
  }

  triggerInput(event){
    this.inputForm = !this.inputForm;
  }

  ngOnInit(): void {
  }

}
