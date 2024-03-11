import { Component } from '@angular/core';
import { PhotoCardComponent } from '../photo-card/photo-card.component';

@Component({
  selector: 'app-gridsection',
  standalone: true,
  imports: [PhotoCardComponent],
  templateUrl: './gridsection.component.html',
  styleUrl: './gridsection.component.css'
})
export class GridsectionComponent {

}
