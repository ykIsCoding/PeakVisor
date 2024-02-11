import { AfterContentInit, Component, ViewChild } from '@angular/core';
import { PhotodivComponent } from '../../components/photodiv/photodiv.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { VideoComponent } from '../../components/video/video.component';
import { SvgComponent } from '../../components/svg/svg.component';
import { StatsboardComponent } from '../../components/statsboard/statsboard.component';
import { AnimationLoader, AnimationOptions, LottieComponent, provideLottieOptions } from 'ngx-lottie';
import { AnimationItem } from 'lottie-web';
import { AppComponent } from '../../app.component';
import { bootstrapApplication } from '@angular/platform-browser';
import { animate, glide, spring, stagger } from "motion"

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



export class HomepageComponent implements AfterContentInit{
  @ViewChild('lottie',{ static: true }) lf: any;

  ngAfterContentInit(){
    animate(
      "h1",
      { y: [-50,0],
        opacity:[0,1]
      },
      {
        delay: stagger(0.1),
        duration: 0.5,
        easing: spring({stiffness: 50,damping: 200})
      }
    )
  }

  togglePlay(e:any){
    console.log(e)
  }
  options: AnimationOptions = {
    path: '/assets/svg/scrolldown.json',
    loop: true,
    autoplay:true,
  };

 
}

