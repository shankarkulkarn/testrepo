import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userName : string ="";
  userPass : string ="";

  constructor(private service : LoginService) { }

  ngOnInit(): void {
  }

  validate()
  {
    this.service.validate(this.userName,this.userPass).subscribe(
      data => alert('login success '+data), error=> alert('Login Failed'))
  }
}
