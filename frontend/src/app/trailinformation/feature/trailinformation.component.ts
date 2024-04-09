import { Component, inject } from '@angular/core';
import { HeroComponent } from '@app/shared/ui/hero/hero.component';
import { PhotoBackgroundComponent } from '@app/shared/ui/photo-background/photo-background.component';
import { InformationsectionComponent } from '../ui/informationsection/informationsection.component';
import { TripAdvisorService } from '@app/shared/data-access/tripadvisor/trip-advisor.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { GoogleMapComponent } from '@app/shared/ui/google-map/google-map.component';
import { ButtonComponent } from '@app/shared/ui/button/button.component';
import { SidebarModule } from 'primeng/sidebar';
import { DialogModule } from 'primeng/dialog';

@Component({
  selector: 'app-trailinformation',
  standalone: true,
  imports: [HeroComponent,DialogModule,PhotoBackgroundComponent,InformationsectionComponent,CommonModule, GoogleMapComponent,ButtonComponent],
  providers:[],
  templateUrl: './trailinformation.component.html',
  styleUrl: './trailinformation.component.css'
})
export class TrailinformationComponent {
  src:string = '';
  locationPhotos:any = [];
  locationId:string='';
  chat:boolean = false;
  generating:boolean = false;
  chatcontent:string =''
  contentService: TripAdvisorService = inject(TripAdvisorService)
  
  details:any = {}
  trails: {title: string, lat: number, lng: number, mapId: string}[];
  
  constructor(private route:ActivatedRoute){
    
    this.route.params.subscribe(d=>{
      console.log("di shere",d)
      this.locationId =d['locationId']
      
      this.contentService.getLocationDetailsByLocationId(this.locationId).then((res)=>{
        this.details = res
        this.trails = [{ title: res.name, lat: Number(res.latitude), lng: Number(res.longitude), mapId:'1' }]
        console.log(res)
        if(this.details['name']){
          this.contentService.getLocationPhotosByLocationName(this.details['name']).then((i)=>{
            console.log(i)
            if(i["images_results"][1].original.toString().endsWith(".jpg")){
              this.src = i["images_results"][1].original
            }
          })
        }
        //this.locationPhotos = [...res]
        //this.src = res[0].images.original.url
      }).catch((e)=>{console.log(e)})
    })

    this.trails = [
      { title: 'New York', lat: 40.7128, lng: -74.0060, mapId:'1' }, 
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

  prompt(){
    this.generating=true
    this.contentService.getChat(this.details["name"]).then((res)=>{
      
      this.chatcontent = res.message
      this.chat = true
      this.generating=false
    }).catch((e)=>{
      this.generating=false
      console.log(e)
    })
    this.generating=false
  }

}
