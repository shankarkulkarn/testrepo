import { Component, OnInit } from '@angular/core';
import { Login } from '../login';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  login : Login = new Login();
  constructor() { }

  ngOnInit(): void {
  }

  signup()
  {
    console.log(this.login);
  }
}
