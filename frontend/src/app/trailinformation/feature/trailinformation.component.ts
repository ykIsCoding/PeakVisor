import { Component, inject } from '@angular/core';
import { HeroComponent } from '@app/shared/ui/hero/hero.component';
import { PhotoBackgroundComponent } from '@app/shared/ui/photo-background/photo-background.component';
import { InformationsectionComponent } from '../ui/informationsection/informationsection.component';
import { TripAdvisorService } from '@app/shared/data-access/tripadvisor/trip-advisor.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-trailinformation',
  standalone: true,
  imports: [HeroComponent,PhotoBackgroundComponent,InformationsectionComponent,CommonModule],
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
  constructor(private route:ActivatedRoute){
    
    this.route.params.subscribe(d=>{
      console.log("di shere",d)
      this.locationId =d['locationId']
      
      this.contentService.getLocationDetailsByLocationId(this.locationId).then((res)=>{
        this.details = res
        if(this.details['name']){
          
        this.contentService.getLocationPhotosByLocationName(this.details['name']).then((i)=>{
          console.log(i)
        })
      }
        //this.locationPhotos = [...res]
        //this.src = res[0].images.original.url
      }).catch((e)=>{console.log(e)})
    })
    
    
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
