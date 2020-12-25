import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-event-card',
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.scss']
})
export class EventCardComponent implements OnInit {
  @Input() name ;
  @Input() charity ;
  @Input() current_budget ;
  @Input()image;
  @Input()id;

  colorList = ["#4CAF50","#008CBA","#f44336","#39CCCC","#001f3f","#3D9970" ];

  constructor() { }

  ngOnInit(): void {
  }
 
  getColor(){
    // returns a random color from above list 
    let index = Math.floor(Math.random() * Math.floor(5));
    return this.colorList[index];

  }
}
