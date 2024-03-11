import { Component, EventEmitter, Input, Output } from '@angular/core';
import { HeaderComponent } from '@app/shared/ui/header/header.component';
import { ButtonComponent } from '@app/shared/ui/button/button.component';
import { NgModel } from '@angular/forms';
import { OnboardingcontentdisplayComponent } from '../ui/onboardingcontentdisplay/onboardingcontentdisplay.component';
// import { OnboardcontentdisplayComponent } from '../../components/onboardcontentdisplay/onboardcontentdisplay.component';

@Component({
  selector: 'app-onboardingpage',
  standalone: true,
  imports: [HeaderComponent, ButtonComponent,OnboardingcontentdisplayComponent],
  templateUrl: './onboarding.page.html',
  styleUrl: './onboarding.page.css'
})

export class OnboardingPage {
  
  stage= 0;
  
  
  nextStage(){
    this.stage+=1;
    this.stage = this.stage%3;
    
  }

  previousStage(){
    this.stage-=1;
    this.stage = this.stage%3;
  }

}
