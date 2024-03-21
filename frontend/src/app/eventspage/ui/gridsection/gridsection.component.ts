import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotoCardComponent } from '../photo-card/photo-card.component';

@Component({
  selector: 'app-gridsection',
  standalone: true,
  imports: [PhotoCardComponent,CommonModule],
  templateUrl: './gridsection.component.html',
  styleUrl: './gridsection.component.css'
})
export class GridsectionComponent {
  @Input() contentArray:any = [];
  
  constructor(){
  }
  contentTrackFn(){

  }
}
