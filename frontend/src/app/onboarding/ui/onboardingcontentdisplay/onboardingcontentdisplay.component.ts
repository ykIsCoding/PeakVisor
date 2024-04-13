import { Component, DoCheck, Input } from '@angular/core';
import { GraphicsLoaderService } from '@app/shared/data-access/graphics-loader/graphics-loader.service';

/**
 * This component changes the content for the onboarding page
 * when the stage number changes, the content changes
 */

@Component({
  selector: 'app-onboardingcontentdisplay',
  standalone: true,
  imports: [],
  providers:[GraphicsLoaderService],
  templateUrl: './onboardingcontentdisplay.component.html',
  styleUrl: './onboardingcontentdisplay.component.css'
})
export class OnboardingcontentdisplayComponent implements DoCheck {
  phtos = ['onboard','parks','linkaccount','allset'];
  src:string='';

  /**
 * This function sets the photo of the associated onboarding page
 */
  updateSrc(){
    this.src = this.graphicsLoaderService.getGraphic(this.phtos[this.stage])
  }
  constructor(private graphicsLoaderService:GraphicsLoaderService){
    this.updateSrc()
  }

  /**
 * This is the Angular's component lifecycle method
 */
  ngDoCheck(): void {
    this.updateSrc()
  }
  @Input() stage=0;
}
