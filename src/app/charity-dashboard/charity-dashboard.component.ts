import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
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
  updateCharityForm ;
  constructor(private route :ActivatedRoute,private http :HttpClient,private formBuilder:FormBuilder) { }

   ngOnInit(): void {
this.charityId = this.route.snapshot.params['id'];
  this.fetchCharityData();

    this.updateCharityForm = this.formBuilder.group({
      name :'' ,
      slogan :'',
      location :'',
      logo :'',
      contact :'',
    })
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


  // filtering form input to new data (removing empty and same data)
   updateCharity(value){
     console.log(value)
     
     this.showInput = false;
    let content = ['name','slogan','location','logo','contact'];
    content.forEach((element)=>{
    
        if ((value[element] != []) && (this.charity[element] != value[element])){
        console.log('changing '+element);

        if(element == 'contact'){
          value[element] = value[element].split(',')
        }

        this.sendUpdateToServer(this.charityId ,element,value[element]);
      }
    })
    window.location.reload();
    
  }

  sendUpdateToServer(id,itemToChange,newValue){
    this.http.post('http://localhost:3000/charity/update/'+itemToChange,{
      "id" : id ,
      "newValue" :newValue,
    }).toPromise().then((res)=>{console.log(res)});
  }
 

  
}
