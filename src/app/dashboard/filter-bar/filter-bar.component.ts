import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
@Component({
  selector: 'app-filter-bar',
  templateUrl: './filter-bar.component.html',
  styleUrls: ['./filter-bar.component.scss']
})
export class FilterBarComponent implements OnInit {
@Output() public filterEvent = new EventEmitter();
@Output() public searchEvent = new EventEmitter();

 searchUtils;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  this.http.get("http://localhost:3000/utils/Search").toPromise().then((res) => {
    this.searchUtils = res;
  });
  }
  search(input,content){
    this.searchEvent.emit(input+"/"+content);
  }
  applyFilter(filter:string,subFilter:string){
    this.filterEvent.emit(filter+"/"+subFilter);
  }

}
