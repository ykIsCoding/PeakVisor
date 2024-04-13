import { AsyncPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppState } from '@app/shared/feature/state/app-state/app.state';
import { SelectAuthenticated, SelectUserId } from '@app/shared/feature/state/auth-state/auth-state.selector';
import { State, Store, select } from '@ngrx/store';
import { Observable, first } from 'rxjs';
 /**
 * This is the injectable service for all authentication related services.
 */
@Injectable({
  providedIn: 'root',
})

export class AuthService {
  authState$:Observable<boolean>;
  constructor(private http:HttpClient, public store:Store<AppState>) { 
    this.authState$ = this.store.pipe(select(SelectAuthenticated))
  }

   /**
 * This queries the backend 2 /appstats for application statistics
 */
  async getAppStats(){
    try{
      const url = "http://localhost:3000/authentication/appstats"
      const data = await new Promise<any>(resolve =>  this.http.get(url
      ).subscribe(c=>resolve(c)))
      
      return data 
    }catch(e){
      console.log(e)
      return {status:"failure",message:"Something went wrong. Please try again."}
    }
  }

  /**
 * This queries the backend 2 /unlinkstrava
 */
  async unlinkStrava(uid:string){
    try{
      console.log("UNLINKING",uid)
      const url = "http://localhost:3000/authentication/unlinkstrava"
      const data = await new Promise<any>(resolve =>  this.http.post(url,{
        uid
      }
      ).subscribe(c=>resolve(c)))
      
      return data 
    }catch(e){
      return {status:"failure",message:"Something went wrong. Please try again."}
    }
  }

   /**
 * This queries the backend 2 /userstats for the user's statistics
 */
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

   /**
 * This queries the store (ngRX State) to see if the user is currently authenticated
 */
  async getAuthStatus(){
    return this.store.pipe(select(SelectAuthenticated))
  }

  /**
 * This queries the store (ngRX State) to for user's UID
 */
  async getUid(){
    return this.store.pipe(select(SelectUserId))
  }

   /**
 * This queries the backend 2 /verifyemail for getting OTP
 */
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

  
/**
 * This queries the backend 2 /login to handle login
 */
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

  /**
 * This queries the backend 2 /logout for logging the user out
 */
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

   /**
 * This queries the backend 2 /resetpassword for resetting the user's password
 */
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

  /**
 * This queries the backend 2 /userdata for user's data
 */
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

   /**
 * This queries the backend 2 /deleteaccount to handle account deletion
 */
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


/**
 * This queries the backend 2 /register to handle registration of user
 */
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

  /**
 * This queries the backend 2 /update to update user's data
 */
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
