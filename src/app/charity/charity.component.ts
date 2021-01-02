import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-charity',
  templateUrl: './charity.component.html',
  styleUrls: ['./charity.component.scss']
})
export class CharityComponent implements OnInit {
  charityID ;
  charityInfo;
  totalDonations = 0;
  totalEvents: number = 0;
  constructor(private route :ActivatedRoute,private http: HttpClient,private router:Router) { }
  navigateEvent(e){
    
    this.http.get("http://localhost:3000/initiative/names/"+e+"/"+this.charityInfo.name).toPromise().then((res)=>{
    this.router.navigate(['event/'+res])
  });
  
  }

  ngOnInit(): void {
    this.charityID = this.route.snapshot.params['id'];
     this.http.get ("http://localhost:3000/charity/"+this.charityID).toPromise().then((res)=>{
      this.charityInfo = res[0];
    console.log(this.charityInfo);
    for ( let i of this.charityInfo.donations){
      this.totalDonations = this.totalDonations +  +i;
    }
    this.charityInfo.initiatives.forEach(element => {
    this.totalEvents += 1;      
    });
    })
  }

}
