import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private http :HttpClient) { }
  isAuth : boolean = false;

  async signIn (username:String,password:String){
   await  this.http.get('http://localhost:3000/charity/auth/'+username+'/'+password).toPromise().then((res : boolean)=>{this.isAuth=res});
     console.log(this.isAuth);
  }
}
