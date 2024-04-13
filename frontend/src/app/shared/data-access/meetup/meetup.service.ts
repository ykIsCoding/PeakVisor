import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
 /**
 * This is the injectable service for all meetup.com related services.
 */
@Injectable({
  providedIn: 'root'
})
export class MeetupService {

  constructor(private http:HttpClient) { }
  
   /**
 * This calls the backend 2 /authenticate to get access token to query meetup.com's API
 */
  async authenticate(){
    const url = 'http://localhost:3000/meetup/authenticate'
    const data = await fetch(url)
    return data
  }

  /**
 * This calls the backend 2 /events to get event data from meetup.com's API
 */
  async getEvents(){
    const url = 'http://localhost:3000/meetup/events'
    const token = await this.authenticate()
    
    try{
    const data = await new Promise<any>(resolve =>  this.http.post(url,
      {
        token:token
      }
    ).subscribe(c=>resolve(c)))
    console.log(data.length)
    let td = []
    for(let m=0;m<data.length;m++){
      td.push({name:data[m].result.title,...data[m]})
    }
    console.log(td)
    return td
  }catch(e){
    console.log(e)
  }
    return []
  }

}
