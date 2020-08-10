import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

  constructor() { }
  canActivate() : boolean
  {
    let status : boolean  = false;
    let role = sessionStorage.getItem("userRole");
    if(role == null )
      status = false;
      else
      status = true;

     return status;
  }

}
