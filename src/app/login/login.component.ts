import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
 userame;
  constructor() {
   
   }
   login(username,password){
    alert(username+"/"+password);
    }


  ngOnInit(): void {
  }

}
