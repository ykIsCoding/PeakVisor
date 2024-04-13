import { Injectable } from '@angular/core';
/**
 * This is the injectable service for all getting graphics to render on the frontend
 * This is used to ensure modularity and facilitate dependency injection
 */
@Injectable({
  providedIn: 'root'
})



export class GraphicsLoaderService {
  images:{ [propKey: string]: string } = {
    '404':'../../../assets/images/404.png',
    'linkaccount':'../../../assets/images/linkaccount.png',
    'mbs':'../../../assets/images/mbs.png',
    'onboard':'../../../assets/images/onboard.png',
    'parks':'../../../assets/images/parks.png',
    'signupphoto':'../../../assets/images/signupphoto.png',
    'allset':'../../../assets/images/allset.png',
    'trailspagevideo':'../../../assets/videos/trailspagevideo.mov',
    'landingpagevideo':'../../../assets/videos/landingpagevideo.mov',
    'eventsvideo':'../../../assets/videos/events.mov',
    'scrolldown':'../../../assets/animations/scrolldown.json',
  }
  /**
 * This gets the graphic based on the name of the graphic
 */
  getGraphic(name:string):string{
    return this.images[name]?this.images[name]:''
  }
  constructor() { }
}
