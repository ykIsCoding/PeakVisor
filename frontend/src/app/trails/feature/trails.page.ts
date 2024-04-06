import { AfterContentInit, Component, inject } from '@angular/core';

import { HeaderComponent } from '@app/shared/ui/header/header.component';
import { VideoComponent } from '@app/shared/ui/video/video.component';
import { PhotoCardComponent } from '@app/shared/ui/photo-card/photo-card.component';
import { GraphicsLoaderService } from '@app/shared/data-access/graphics-loader/graphics-loader.service';
import { AuthService } from '@app/shared/data-access/auth/auth.service';
import { MessageService } from 'primeng/api';
import { AppState } from '@app/shared/feature/state/app-state/app.state';
import { Store } from '@ngrx/store';
import { PageWrapperComponent } from '@app/shared/ui/page-wrapper/page-wrapper.component';
import { VideoBackground } from '@app/shared/ui/video-background/video-background.component';
import { HeroComponent } from '@app/shared/ui/hero/hero.component';

import { ButtongroupComponent } from '../ui/buttongroup/buttongroup.component';
import { TripAdvisorService } from '@app/shared/data-access/tripadvisor/trip-advisor.service';
import { GridsectionComponent } from '../ui/gridsection/gridsection.component';
import { RouterOutlet } from '@angular/router';
import { GoogleMapComponent } from '@app/shared/ui/google-map/google-map.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-trails-page',
  standalone: true,
  imports: [RouterOutlet,HeaderComponent, VideoComponent, PhotoCardComponent,VideoBackground,HeroComponent,GridsectionComponent,ButtongroupComponent, GoogleMapComponent, NgFor],
  providers:[GraphicsLoaderService, AuthService,MessageService,TripAdvisorService],
  templateUrl: './trails.page.html',
  styleUrl: './trails.page.css'
})

export class TrailsPage extends PageWrapperComponent implements AfterContentInit {
  src:string;
  content = [{name:'MacRitchie',routerLink:'/trailinfo', location_id:'0'}];
  contentService: TripAdvisorService = inject(TripAdvisorService);
  trails: {title: string, lat: number, lng: number, mapId: string}[];
  constructor(private authservice: AuthService, messageService:MessageService,store:Store<AppState>,private graphicsLoaderService:GraphicsLoaderService){
    super(messageService,store)
    this.trails = [
      { title: 'New York', lat: 40.7128, lng: -74.0060, mapId:'1' }, 
      { title: 'Los Angeles', lat: 34.0522, lng: -118.2437, mapId:'2' }, 
      { title: 'London', lat: 51.5074, lng: -0.1278, mapId:'3' },   
    ];
    this.toggleLoader(true)
    this.src = this.graphicsLoaderService.getGraphic('trailspagevideo')
    this.contentService.getAllLocations().then(res=>{
      console.log(res)
      this.content = [...res]
      this.toggleLoader(false)
    }).catch(e=>console.log(e))

  }

  ngAfterContentInit(): void {
      
  }
}
