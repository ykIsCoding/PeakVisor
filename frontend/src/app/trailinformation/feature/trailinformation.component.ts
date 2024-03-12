import { Component } from '@angular/core';
import { HeroComponent } from '@app/shared/ui/hero/hero.component';
import { PhotoBackgroundComponent } from '@app/shared/ui/photo-background/photo-background.component';
import { InformationsectionComponent } from '../ui/informationsection/informationsection.component';

@Component({
  selector: 'app-trailinformation',
  standalone: true,
  imports: [HeroComponent,PhotoBackgroundComponent,InformationsectionComponent],
  templateUrl: './trailinformation.component.html',
  styleUrl: './trailinformation.component.css'
})
export class TrailinformationComponent {
  src:string = ''

}
