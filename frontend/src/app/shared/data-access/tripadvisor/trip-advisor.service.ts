import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TripAdvisorService {
  constructor() { }

  async getAllLocations(){
    const url = 'http://localhost:3000/tripadvisor/all'
    const data = await fetch(url)
    //return data
    return await data.json()??[];
  }

  async getLocationPhotosByLocationId(locationID:string){
    const url = `http://localhost:3000/tripadvisor/${locationID}/photo`
    const data = await fetch(url)
    //return data
    return await data.json()??[];
  }

  async getLocationDetailsByLocationId(locationID:string){
    const url = `http://localhost:3000/tripadvisor/${locationID}`
    const data = await fetch(url)
    //return data
    return await data.json()??[];
  }
}
