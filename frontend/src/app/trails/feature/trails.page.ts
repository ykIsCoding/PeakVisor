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
/**
 * This is the trails page. It shows all the trails data queries from TripAdvisor's API
 */

@Component({
  selector: 'app-trails-page',
  standalone: true,
  imports: [RouterOutlet,HeaderComponent, VideoComponent, PhotoCardComponent,VideoBackground,HeroComponent,GridsectionComponent,ButtongroupComponent],
  providers:[GraphicsLoaderService, AuthService,MessageService,TripAdvisorService],
  templateUrl: './trails.page.html',
  styleUrl: './trails.page.css'
})

export class TrailsPage extends PageWrapperComponent implements AfterContentInit {
  src:string;
  content = [{name:'MacRitchie',routerLink:'/trailinfo', location_id:'0'}];
  contentService: TripAdvisorService = inject(TripAdvisorService);

  constructor(private authservice: AuthService, messageService:MessageService,store:Store<AppState>,private graphicsLoaderService:GraphicsLoaderService){
    super(messageService,store)
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
