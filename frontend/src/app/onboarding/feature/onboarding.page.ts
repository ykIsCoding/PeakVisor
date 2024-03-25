import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { HeaderComponent } from '@app/shared/ui/header/header.component';
import { ButtonComponent } from '@app/shared/ui/button/button.component';
import { NgModel } from '@angular/forms';
import { OnboardingcontentdisplayComponent } from '../ui/onboardingcontentdisplay/onboardingcontentdisplay.component';
import { Router } from '@angular/router';
// import { OnboardcontentdisplayComponent } from '../../components/onboardcontentdisplay/onboardcontentdisplay.component';

@Component({
  selector: 'app-onboardingpage',
  standalone: true,
  imports: [HeaderComponent, ButtonComponent,OnboardingcontentdisplayComponent],
  templateUrl: './onboarding.page.html',
  styleUrl: './onboarding.page.css'
})

export class OnboardingPage {
  router:Router = inject(Router)
  contentList=[
    {
      heading:'Welcome to PeakVisor',
      content:'Allow us to guide you through the website so it will be easier for you to navigate'
    },
    {
      heading:'Find nature trails to explore',
      content:'You can find hiking events, details of parks, and track your own hiking activities'
    },
    {
      heading:'Link your Strava account',
      content:'And we’ll keep track of your hiking adventures'
    },
    {
      heading:'All set',
      content:'Grab your hiking gear and roll out'
    },
  ]
  content=this.contentList[0].content
  heading=this.contentList[0].heading
  stage= 0;
  
  
  nextStage(){
    this.stage+=1;
    if(this.stage==4){
      this.router.navigateByUrl('/profile')
      return
    }
    this.content=this.contentList[this.stage].content
    this.heading=this.contentList[this.stage].heading
    
  }

  previousStage(){
    this.stage-=1;
    this.content=this.contentList[this.stage].content
    this.heading=this.contentList[this.stage].heading
    this.stage = this.stage%4;
  }

}
