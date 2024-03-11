import { Component, DoCheck, Input } from '@angular/core';
import { GraphicsLoaderService } from '@app/shared/data-access/graphics-loader/graphics-loader.service';

@Component({
  selector: 'app-onboardingcontentdisplay',
  standalone: true,
  imports: [],
  providers:[GraphicsLoaderService],
  templateUrl: './onboardingcontentdisplay.component.html',
  styleUrl: './onboardingcontentdisplay.component.css'
})
export class OnboardingcontentdisplayComponent implements DoCheck {
  phtos = ['onboard','parks','linkaccount','onboard'];
  src:string='';

  updateSrc(){
    this.src = this.graphicsLoaderService.getGraphic(this.phtos[this.stage])
  }
  constructor(private graphicsLoaderService:GraphicsLoaderService){
    this.updateSrc()
  }

  ngDoCheck(): void {
    this.updateSrc()
  }
  @Input() stage=0;
}
