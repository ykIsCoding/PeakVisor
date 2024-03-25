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

  async getLocationPhotosByLocationName(locationName:string){
    const url = `http://localhost:3000/tripadvisor/tripadvisor/${locationName.replaceAll(" ", "&")}/photo`
    
    const data = await fetch(url).catch((e)=>{
      console.log(e)
    })
    console.log(data)
    
    return await data;
  }

  async getLocationDetailsByLocationId(locationID:string){
    const url = `http://localhost:3000/tripadvisor/${locationID}`
    const data = await fetch(url)
    //return data
    return await data.json()??{};
  }
}
