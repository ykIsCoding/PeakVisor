import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
 /**
 * This is the injectable service for all tripadvisor and seraAPI related services.
 */
@Injectable({
  providedIn: 'root'
})
export class TripAdvisorService {
  constructor(private http:HttpClient) { }

   /**
 * This function gets a list of location data from TripAdvisor's API
 */
  async getAllLocations(){
    const url = 'https://peakvisor.onrender.com/tripadvisor/all'
    const data = await fetch(url)
    //return data
    
    return await data.json()??[];
  }

  /**
 * This function gets a list of photos from 1 location from SeraAPI
 */
  async getLocationPhotosByLocationName(locationName:string){
    const url = `http://localhost:3000/tripadvisor/location/photo`
    
    try{
      const data = await new Promise<any>(resolve => this.http.post(url,
        {
          q:locationName
        }
      ).subscribe(c=>resolve(c)))
      
      return data 
    }catch(e){
      console.log(e)
    }
    
    return '';
  }

  /**
 * This function gets AI powered content for 1 location
 */
  async getChat(prompt:string){
    try{
      const url = `http://localhost:3000/ai/chat?location=${prompt}`
      const data = await new Promise<any>(resolve =>  this.http.get(url).subscribe(c=>resolve(c)))
      
      return data 
    }catch(e){
      return {status:"failure",message:"Something went wrong. Please try again."}
    }
  }

  async getLocationDetailsByLocationId(locationID:string){
    const url = `http://localhost:3000/tripadvisor/${locationID}`
    const data = await fetch(url)
    //return data
    return await data.json()??{};
  }
}
