import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor() { }

  authenticate = (email:string,password:string) =>{
    return email.toLowerCase()=='user@gmail.com' && password=='password'
  }
  
}
