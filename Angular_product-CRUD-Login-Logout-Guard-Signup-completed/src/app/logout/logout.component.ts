import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private  router : Router) { }

  ngOnInit(): void {
    let user =sessionStorage.getItem("userName");
    if(user==null)
    {
      alert('Please login');
    }
    else{
        sessionStorage.clear();
        alert(user+' Logout successfully ');
        this.router.navigate(['/login']);
    }
  }

}
