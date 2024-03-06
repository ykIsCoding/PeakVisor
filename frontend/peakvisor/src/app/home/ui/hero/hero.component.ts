import { AfterContentInit, Component, ViewChild } from '@angular/core';
import { AnimationLoader, AnimationOptions, LottieComponent, provideLottieOptions } from 'ngx-lottie';
import { AnimationItem } from 'lottie-web';
import { animate, glide, spring, stagger } from "motion"

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [LottieComponent],
  providers:[provideLottieOptions({
    player: () => import(/* webpackChunkName: 'lottie-web' */ 'lottie-web'),
  }),AnimationLoader],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})

export class HeroComponent implements AfterContentInit{

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