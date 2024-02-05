import { Component } from '@angular/core';
import { PhotodivComponent } from '../../components/photodiv/photodiv.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { VideoComponent } from '../../components/video/video.component';
import { SvgComponent } from '../../components/svg/svg.component';
import { StatsboardComponent } from '../../components/statsboard/statsboard.component';
import { AnimationLoader, AnimationOptions, LottieComponent, provideLottieOptions } from 'ngx-lottie';
import { AnimationItem } from 'lottie-web';
import { AppComponent } from '../../app.component';
import { bootstrapApplication } from '@angular/platform-browser';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [PhotodivComponent, NavbarComponent,VideoComponent,SvgComponent,StatsboardComponent,LottieComponent],
  providers:[provideLottieOptions({
    player: () => import(/* webpackChunkName: 'lottie-web' */ 'lottie-web'),
  }),AnimationLoader],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {
  options: AnimationOptions = {
    path: '/assets/svg/scrolldown.json',
    loop: true,
    autoplay:true
  };

 
}

