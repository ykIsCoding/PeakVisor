import { Component, inject } from '@angular/core';
import { HeroComponent } from '@app/shared/ui/hero/hero.component';
import { PhotoBackgroundComponent } from '@app/shared/ui/photo-background/photo-background.component';
import { InformationsectionComponent } from '../ui/informationsection/informationsection.component';
import { TripAdvisorService } from '@app/shared/data-access/tripadvisor/trip-advisor.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { GoogleMapComponent } from '@app/shared/ui/google-map/google-map.component';

@Component({
  selector: 'app-trailinformation',
  standalone: true,
  imports: [HeroComponent,PhotoBackgroundComponent,InformationsectionComponent,CommonModule, GoogleMapComponent],
  providers:[],
  templateUrl: './trailinformation.component.html',
  styleUrl: './trailinformation.component.css'
})
export class TrailinformationComponent {
  src:string = '';
  locationPhotos:any = [];
  locationId:string='';
  contentService: TripAdvisorService = inject(TripAdvisorService)
  details:any = {}
  mapId: string = '1';
  trails: {title: string, lat: number, lng: number, mapId: string}[];
  
  constructor(private route:ActivatedRoute){
    
    this.route.params.subscribe(d=>{
      console.log("di shere",d)
      this.locationId =d['locationId']
      
      this.contentService.getLocationDetailsByLocationId(this.locationId).then((res)=>{
        this.details = res
        if(this.details['name']){
          this.contentService.getLocationPhotosByLocationName(this.details['name']).then((i)=>{
            console.log(i)
            if(i["images_results"][1].original.toString().endsWith(".jpg")){
              this.src = i["images_results"][1].original
            }
          })
        }
        // if (this.details['latitude'] && this.details['longitude']) {
        //   console.log("HIII")
        //   this.details['latitude'] = Number(this.details['latitude'])
        //   console.log(this.details['latitude'])
        //   this.details['latitude'] = Number(this.details['longitude'])
        //   console.log(this.details['longitude'])
        // }
        //this.locationPhotos = [...res]
        //this.src = res[0].images.original.url
      }).catch((e)=>{console.log(e)})
    })

    this.trails = [
      { title: this.details['name'], lat: 40.7128, lng: -74.0060, mapId:'1' },   
    ];
  }

  get getDescription(){
    return this.details["description"]??'No Description'
  }

  get getBearings(){
    return `Longitude: ${this.details["longitude"]}\nLatitude: ${this.details["latitude"]}`??'No Bearings'
  }

  get getRatings(){
    return `There are a total of ${this.details["num_reviews"]} reviews for this location, with an average rating of ${this.details["rating"]}`??'No Ratings'
  }

}
