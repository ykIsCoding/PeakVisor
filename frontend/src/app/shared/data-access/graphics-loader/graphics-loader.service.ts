import { Injectable } from '@angular/core';

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
    'trailspagevideo':'../../../assets/videos/trailspagevideo.mov',
    'landingpagevideo':'../../../assets/videos/landingpagevideo.mov',
    'eventsvideo':'../../../assets/videos/events.mov',
    'scrolldown':'../../../assets/animations/scrolldown.json',
  }
  getGraphic(name:string):string{
    return this.images[name]?this.images[name]:''
  }
  constructor() { }
}
