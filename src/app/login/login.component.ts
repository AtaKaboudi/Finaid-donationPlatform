import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../services/auth-service.service';
import { CommonModule } from '@angular/common';  
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  authStatus   : Boolean = false ;
  id : any ;
  try : number =0;
  login_signin : boolean = false;
  loginForm ;
  SignUp_Form ;
  constructor(private authService : AuthServiceService,
    private router :Router,
    private formBuilder : FormBuilder ,
    ) {
      this.SignUp_Form = this.formBuilder.group({
        charityName :"",
        username : "",
        password  :"",
      })
      this.loginForm = this.formBuilder.group({
        username : "",
        password  :"",
      })
   
    }
  
    

    

  async login(value){
    await  this.authService.signIn(value.username,value.password).then(()=>{
    
    });

    this.authStatus = this.authService.isAuth;
    this.id = this.authService.id;
    if((this.id == 0) || (this.id == undefined)){
      this.try++;
      this.loginForm.reset();
      return;
    }
    this.router.navigate(['charitydashboard/'+this.id]);


    }
    logout(){
      this.authService.isAuth = false;
      this.authStatus = this.authService.isAuth;
    }
test(){
  alert(this.authService.isAuth);

}



 async onSignIn(value){
this.authService.signUp(value.charityName,value.username,value.password);
this.login_signin= false;
}


  
  ngOnInit(): void {
    this.authStatus = this.authService.isAuth;
  }

}
