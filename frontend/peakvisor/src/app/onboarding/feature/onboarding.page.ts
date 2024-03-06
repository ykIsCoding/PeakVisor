import { Component, EventEmitter, Input, Output } from '@angular/core';
import { HeaderComponent } from '@app/shared/ui/header/header.component';
import { ButtonComponent } from '@app/shared/ui/button/button.component';
import { NgModel } from '@angular/forms';
// import { OnboardcontentdisplayComponent } from '../../components/onboardcontentdisplay/onboardcontentdisplay.component';

@Component({
  selector: 'app-onboardingpage',
  standalone: true,
  imports: [HeaderComponent, ButtonComponent],
  templateUrl: './onboarding.page.html',
  styleUrl: './onboarding.page.css'
})

export class OnboardingPage {
  photos = {
    0:'onboard',
    1:'parks',
    2:'linkaccount',
    3:'onboard'
  }
  
  stage = 0;
  
  nextStage(){
    this.stage+=1;
    this.stage = this.stage%3;
  }

  previousStage(){
    this.stage-=1;
    this.stage = this.stage%3;
  }

}
