import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-onboardcontentdisplay',
  standalone: true,
  imports: [],
  templateUrl: './onboardcontentdisplay.component.html',
  styleUrl: './onboardcontentdisplay.component.css'
})
export class OnboardcontentdisplayComponent {
  phtos = ['onboard','parks','linkaccount','onboard'];
  @Input() stage:any=0;
}
