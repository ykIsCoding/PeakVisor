import { AsyncPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppState } from '@app/shared/feature/state/app-state/app.state';
import { SelectAuthenticated, SelectUserId } from '@app/shared/feature/state/auth-state/auth-state.selector';
import { State, Store, select } from '@ngrx/store';
import { Observable, first } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class AuthService {
  authState$:Observable<boolean>;
  constructor(private http:HttpClient, public store:Store<AppState>) { 
    this.authState$ = this.store.pipe(select(SelectAuthenticated))
  }

  

  async getAuthStatus(){
    return this.store.pipe(select(SelectAuthenticated))
  }

  async getUid(){
    return this.store.pipe(select(SelectUserId))
  }

  async getOTP(email:string){
    try{
      const url = "http://localhost:3000/authentication/verifyemail"
      const data = await new Promise<any>(resolve =>  this.http.post(url,
        {
          email:email
        }
      ).subscribe(c=>resolve(c)))
      
      return data 
    }catch(e){
      console.log(e)
    }
  }

  async login(email:string,password:string){
    try{
      const url = "http://localhost:3000/authentication/login"
      const data = await new Promise<any>(resolve =>  this.http.post(url,
        {
          email:email,
          password:password
        }
      ).subscribe(c=>resolve(c)))
      
      return data 
    }catch(e){
      console.log(e)
    }
  }

  async logout(){
    try{
      const url = "http://localhost:3000/authentication/logout"
      const data = await new Promise<any>(resolve =>  this.http.post(url,
        {
          
        }
      ).subscribe(c=>resolve(c)))
      
      return data 
    }catch(e){
      console.log(e)
    }
  }

  async getUserSettings(uid:string){
    try{
      const url = "http://localhost:3000/authentication/userdata"
      const data = await new Promise<any>(resolve =>  this.http.post(url,
        {
          uid:uid
        }
      ).subscribe(c=>resolve(c)))
      
      
      return {...data}
    }catch(e){
      console.log(e)
    }
  }

  async deleteAccount(uid:string){
    try{
      const url = "http://localhost:3000/authentication/deleteaccount"
      const data = await new Promise<any>(resolve =>  this.http.post(url,
        {
          uid:uid
        }
      ).subscribe(c=>resolve(c)))
      return data 
    }catch(e){
      console.log(e)
    }
  }



  async register(email:string,password:string,name:string,identifier:string, otp:string){
    try{
      const url = "http://localhost:3000/authentication/register"
      const data = await new Promise<any>(resolve =>  this.http.post(url,
        {
          email:email,
          otp:otp,
          password:password,
          name:name,
          identifier:identifier
        }
      ).subscribe(c=>resolve(c)))
      
      return data
    }catch(e){
      console.log(e)
    }
  }
  
}
