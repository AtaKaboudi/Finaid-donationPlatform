import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private http :HttpClient) { }
  isAuth : boolean = false;
  id ;
  async signIn (username:String,password:String) {
      await this.http.get('http://localhost:3000/charity/auth/'+username+'/'+password).toPromise().then((res : any)=>{
   
   // alert(' server respondede :'+this.id)
      this.isAuth = res.exists;
    this.id = res.id ;
  })
  }

  signUp(charityName,username,password){
   this.http.post('http://localhost:3000/charity/signup/'+charityName+'/'+username+'/'+password,{}).toPromise().then((res:any)=>{
    this.isAuth = true ;
    this.id = res.id ;
   })
  }

 
  
}
