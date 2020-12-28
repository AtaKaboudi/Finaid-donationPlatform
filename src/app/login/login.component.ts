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
  constructor(private authService : AuthServiceService,private router :Router) {
   
   }
  async login(username,password){
   await this.authService.signIn(username,password);
    this.authStatus = this.authService.isAuth;
    this.router.navigate(['dashboard']);
    }
    logout(){
      this.authService.isAuth = false;
      this.authStatus = this.authService.isAuth;
    }
test(){
  alert(this.authStatus);
}
  
  ngOnInit(): void {
    this.authStatus = this.authService.isAuth;
  }

}
