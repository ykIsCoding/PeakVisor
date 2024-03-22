import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TripAdvisorService {
  constructor() { }

  async getAllLocations(){
    const url = 'https://peakvisor.onrender.com/tripadvisor/all'
    const data = await fetch(url)
    //return data
    return await data.json()??[];
  }

  async getLocationPhotosByLocationId(locationID:string){
    const url = `https://peakvisor.onrender.com/tripadvisor/${locationID}/photo`
    
    const data = await fetch(url)
    console.log(data)
    //return data
    return await data.json()??[];
  }

  async getLocationDetailsByLocationId(locationID:string){
    const url = `https://peakvisor.onrender.com/tripadvisor/${locationID}`
    const data = await fetch(url)
    //return data
    return await data.json()??[];
  }
}
