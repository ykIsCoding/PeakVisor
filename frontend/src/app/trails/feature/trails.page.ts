import { Component } from '@angular/core';

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
import { GridsectionComponent } from '@app/shared/ui/gridsection/gridsection.component';
import { ButtongroupComponent } from '../ui/buttongroup/buttongroup.component';

@Component({
  selector: 'app-trails-page',
  standalone: true,
  imports: [HeaderComponent, VideoComponent, PhotoCardComponent,VideoBackground,HeroComponent,GridsectionComponent,ButtongroupComponent],
  providers:[GraphicsLoaderService, AuthService,MessageService],
  templateUrl: './trails.page.html',
  styleUrl: './trails.page.css'
})

export class TrailsPage extends PageWrapperComponent {
  src:string;
  content = [{name:'MacRitchie',routerLink:'/trailinfo'},{name:'East Coast Park',routerLink:'/trailinfo'},{name:'Botanic Gardens',routerLink:'/trailinfo'},{name:'Chinese Garden',routerLink:'/trailinfo'}]
  constructor(private authservice: AuthService, messageService:MessageService,store:Store<AppState>,private graphicsLoaderService:GraphicsLoaderService){
    super(messageService,store)
    this.src = this.graphicsLoaderService.getGraphic('trailspagevideo')
  }
}
