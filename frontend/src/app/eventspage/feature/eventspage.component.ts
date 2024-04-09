import { AfterContentInit, AfterViewInit, Component, OnInit, inject } from '@angular/core';
import { AuthService } from '@app/shared/data-access/auth/auth.service';
import { GraphicsLoaderService } from '@app/shared/data-access/graphics-loader/graphics-loader.service';
import { MeetupService } from '@app/shared/data-access/meetup/meetup.service';
import { AppState } from '@app/shared/feature/state/app-state/app.state';
import { ButtonComponent } from '@app/shared/ui/button/button.component';
import { HeroComponent } from '@app/shared/ui/hero/hero.component';
import { PageWrapperComponent } from '@app/shared/ui/page-wrapper/page-wrapper.component';
import { VideoBackground } from '@app/shared/ui/video-background/video-background.component';
import { Store } from '@ngrx/store';
import { MessageService } from 'primeng/api';
import { GridsectionComponent } from '../ui/gridsection/gridsection.component';
import { FooterComponent } from '@app/shared/ui/footer/footer.component';

@Component({
  selector: 'app-eventspage',
  standalone: true,
  imports: [HeroComponent,ButtonComponent,GridsectionComponent,VideoBackground,FooterComponent],
  templateUrl: './eventspage.component.html',
  providers:[MeetupService],
  styleUrl: './eventspage.component.css'
})
export class EventspageComponent extends PageWrapperComponent implements OnInit,AfterContentInit, AfterViewInit {
  content:any = [{name:'kakais'}]
  contentService: MeetupService = inject(MeetupService)
  src:string;
  constructor(private authservice: AuthService, messageService:MessageService,store:Store<AppState>,private graphicsLoaderService:GraphicsLoaderService){
    super(messageService,store)
    this.src = this.graphicsLoaderService.getGraphic('eventsvideo')
  }

 ngAfterViewInit(): void {
  this.contentService.getEvents().then((cnt)=>{
    console.log(cnt)
    this.content = cnt
    this.toggleLoader(false)
  })
 }

 ngAfterContentInit(): void {
    
 }

  ngOnInit(): void {
    this.toggleLoader(true)
  }
}
