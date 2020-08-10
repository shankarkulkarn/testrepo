import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userName : string ="";
  userPass : string ="";

  constructor(private service : LoginService,private router : Router) { }

  ngOnInit(): void {
  }
  signup()
  {
    this.router.navigate(['/signup'])
  }
  validate()
  {
     this.service.validate(this.userName,this.userPass).subscribe(
      data => {
               sessionStorage.setItem("userRole",data);
               sessionStorage.setItem("userName",this.userName);
               alert('login success '+data)

              },

      error => {
                sessionStorage.clear();
                alert('Login Failed')
                }

      )
  }
}
