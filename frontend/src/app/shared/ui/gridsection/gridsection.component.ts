import { Component, Input } from '@angular/core';
import { PhotoCardComponent } from '../photo-card/photo-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gridsection',
  standalone: true,
  imports: [PhotoCardComponent,CommonModule],
  templateUrl: './gridsection.component.html',
  styleUrl: './gridsection.component.css'
})
export class GridsectionComponent {
  @Input() contentArray:any = [];
  contentTrackFn(){

  }
}
