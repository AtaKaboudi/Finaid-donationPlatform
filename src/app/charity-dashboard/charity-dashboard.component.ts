import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-charity-dashboard',
  templateUrl: './charity-dashboard.component.html',
  styleUrls: ['./charity-dashboard.component.scss']
})
export class CharityDashboardComponent implements OnInit {
  charityId;
  charity;
  totalDonations :number =0;
  showInput :boolean = false;
  constructor(private route :ActivatedRoute,private http :HttpClient) { }

   ngOnInit(): void {
this.charityId = this.route.snapshot.params['id'];
  this.fetchCharityData();
   }
async fetchCharityData (){
 await this.http.get('http://localhost:3000/charity/'+this.charityId).toPromise().then((res)=>{
    this.charity = res[0] ;
    console.log(this.charity);
  });
  this.charity.donations.forEach(element => {
    this.totalDonations += +element;
  });
   }

   triggerInput(){
    this.showInput = !this.showInput;
   }
   change(){
     this.showInput = false;
   }

 

  
}
