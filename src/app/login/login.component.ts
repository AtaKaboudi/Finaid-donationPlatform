import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../services/auth-service.service';
import { CommonModule } from '@angular/common';  
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  authStatus   : Boolean ;
  id : any ;
  try : number =0;
  constructor(private authService : AuthServiceService,private router :Router) {
   
   }
  async login(username,password){
      this.authService.signIn(username,password).then(()=>{
      this.authStatus = this.authService.isAuth;
      this.id = this.authService.id;
      this.router.navigate(['charitydashboard/'+this.id]);
        if(this.id == 0){
          this.try++;
        }
    });
    
  
    

    }
    logout(){
      this.authService.isAuth = false;
      this.authStatus = this.authService.isAuth;
    }
test(){
  alert(this.authService.isAuth);

}
  
  ngOnInit(): void {
    this.authStatus = this.authService.isAuth;
  }

}
