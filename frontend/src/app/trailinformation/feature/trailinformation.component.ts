import { Component, inject } from '@angular/core';
import { HeroComponent } from '@app/shared/ui/hero/hero.component';
import { PhotoBackgroundComponent } from '@app/shared/ui/photo-background/photo-background.component';
import { InformationsectionComponent } from '../ui/informationsection/informationsection.component';
import { TripAdvisorService } from '@app/shared/data-access/tripadvisor/trip-advisor.service';

@Component({
  selector: 'app-trailinformation',
  standalone: true,
  imports: [HeroComponent,PhotoBackgroundComponent,InformationsectionComponent],
  providers:[],
  templateUrl: './trailinformation.component.html',
  styleUrl: './trailinformation.component.css'
})
export class TrailinformationComponent {
  src:string = '';
  locationPhotos:any = [];
  contentService: TripAdvisorService = inject(TripAdvisorService)
  constructor(){
    this.contentService.getLocationPhotosByLocationId('3512406').then(res=>{
      console.log(res)
      this.locationPhotos = [...res]
      this.src = res[0].images.original.url
    }).catch(e=>console.log(e))
  }
}
