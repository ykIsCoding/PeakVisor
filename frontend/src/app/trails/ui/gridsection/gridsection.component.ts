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
  processedArray:any=[];
  constructor(){
    for(let i=0;i<this.contentArray.length;i++){
      this.processedArray[i]={routerLink:this.contentArray[i].result.eventUrl,name:this.contentArray[i].name}
    }
    console.log(this.processedArray)
  }
  contentTrackFn(){

  }
}
