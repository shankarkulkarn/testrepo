import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-app';
  empid : number = 1001;
  empname : string = 'Sachin' ;
  mobile : string []= ['9876546789','6583978509','8543246789'];
  status   = true;
  address = {"street" : "bvrit road",
              "city" : "hyderabad",
              "state" : "telangana",
               "country": "india"
            } ;

}
