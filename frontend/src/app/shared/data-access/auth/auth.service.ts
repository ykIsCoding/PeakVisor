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

  async getAppStats(){
    try{
      const url = "http://localhost:3000/authentication/appstats"
      const data = await new Promise<any>(resolve =>  this.http.get(url,
      ).subscribe(c=>resolve(c)))
      
      return data 
    }catch(e){
      return {status:"failure",message:"Something went wrong. Please try again."}
    }
  }

  async getUserStats(uid:string){
    try{
      const url = "http://localhost:3000/authentication/userstats"
      const data = await new Promise<any>(resolve =>  this.http.post(url,{
        uid
      }
      ).subscribe(c=>resolve(c)))
      
      return data 
    }catch(e){
      return {status:"failure",message:"Something went wrong. Please try again."}
    }
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
      return {status:"failure",message:"Something went wrong. Please try again."}
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
      return {status:"failure",message:"Something went wrong. Please try again."}
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
      return {status:"failure",message:"Something went wrong. Please try again."}
    }
  }

  async passwordReset(email:string){
    try{
      const url = "http://localhost:3000/authentication/resetpassword"
      const data = await new Promise<any>(resolve =>  this.http.post(url,
        {
          email:email
        }
      ).subscribe(c=>resolve(c)))
      
      return data 
    }catch(e){
      return {status:"failure",message:"Something went wrong. Please try again."}
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
      return {status:"failure",message:"Something went wrong. Please try again."}
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
      return {status:"failure",message:"Something went wrong. Please try again."}
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
      
      return {status:"failure",message:"Something went wrong. Please try again."}
    }
  }

  async update(email:string,name:string,strava:string,uid:string){
    try{
      const url = "http://localhost:3000/authentication/update"
      const data = await new Promise<any>(resolve =>  this.http.post(url,
        {
          uid,
          email,
          name,
          strava
        }
      ).subscribe(c=>resolve(c)))
      
      return data
    }catch(e){
      return {status:"failure",message:"Something went wrong. Please try again."}
    }
  }
  
}
