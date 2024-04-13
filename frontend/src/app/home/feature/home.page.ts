import { AfterContentInit, ChangeDetectionStrategy, Component, OnInit, ViewChild } from '@angular/core';
import { HeaderComponent } from '@app/shared/ui/header/header.component';
import { AboutComponent } from '../ui/about/about.component';
import { HeroComponent } from '../../shared/ui/hero/hero.component';
import { StatsBoardComponent } from '../ui/stats/stats-board/stats-board.component';
import { TrailsComponent } from '../ui/trails/trails.component';
import { VideoBackground } from '../../shared/ui/video-background/video-background.component';
import { GraphicsLoaderService } from '@app/shared/data-access/graphics-loader/graphics-loader.service';
import { AnimationLoader, AnimationOptions, LottieComponent, provideLottieOptions } from 'ngx-lottie';
import { AnimationItem } from 'lottie-web';
import Lottie from 'lottie-web';
import { animate } from '@angular/animations';
import { Footer } from 'primeng/api';
import { FooterComponent } from '@app/shared/ui/footer/footer.component';

 /**
 * This is the home page component
 */
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, AboutComponent, HeroComponent, StatsBoardComponent, TrailsComponent, VideoBackground,LottieComponent, FooterComponent],
  templateUrl: 'home.page.html',
  providers:[GraphicsLoaderService,provideLottieOptions({
    player: () => import(/* webpackChunkName: 'lottie-web' */ 'lottie-web'),
  }),AnimationLoader],
  styleUrls: ['home.page.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class HomePage implements OnInit{
  src:string;
  options: AnimationOptions ={};
  constructor(private graphicsLoaderService:GraphicsLoaderService) {
    this.src = this.graphicsLoaderService.getGraphic('landingpagevideo');
  }

  @ViewChild('lottie',{ static: true }) lf: any;


  togglePlay(e:any){
    console.log(e)
  }

   /**
 * This plays the mouse scroll animation
 */
  ngOnInit(): void {
      this.options =  {
        path: '../../../assets/animations/scrolldown.json',
        loop: true,
        autoplay:true,
      };
      
  }
}




