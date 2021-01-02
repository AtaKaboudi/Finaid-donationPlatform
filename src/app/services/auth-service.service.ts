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
      await this.http.get('http://localhost:3000/charity/auth/'+username+'/'+password).subscribe((res : any)=>{
    this.isAuth = res.exists;
    this.id = res.id ;

  })

  }

 
  
}
