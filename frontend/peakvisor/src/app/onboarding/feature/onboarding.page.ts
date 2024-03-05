import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { ButtonComponent } from '../../components/button/button.component';
import { NgModel } from '@angular/forms';
import { OnboardcontentdisplayComponent } from '../../components/onboardcontentdisplay/onboardcontentdisplay.component';

@Component({
  selector: 'app-onboardingpage',
  standalone: true,
  imports: [NavbarComponent, ButtonComponent,OnboardcontentdisplayComponent],
  templateUrl: './onboardingpage.component.html',
  styleUrl: './onboardingpage.component.css'
})
export class OnboardingpageComponent {
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
