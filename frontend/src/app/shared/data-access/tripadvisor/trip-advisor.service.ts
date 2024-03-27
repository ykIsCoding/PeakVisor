import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TripAdvisorService {
  constructor(private http:HttpClient) { }

  async getAllLocations(){
    const url = 'https://peakvisor.onrender.com/tripadvisor/all'
    const data = await fetch(url)
    //return data
    
    return await data.json()??[];
  }

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

  async getLocationDetailsByLocationId(locationID:string){
    const url = `http://localhost:3000/tripadvisor/${locationID}`
    const data = await fetch(url)
    //return data
    return await data.json()??{};
  }
}
