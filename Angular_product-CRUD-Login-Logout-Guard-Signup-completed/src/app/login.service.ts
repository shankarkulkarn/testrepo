import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url ="http://localhost:9090/login";

  constructor(private http : HttpClient) { }

  validate(user : string ,pass : string )
  {
      return this.http.get(this.url+"/validate/"+user+"/"+pass,{responseType : 'text'});
  }

}
