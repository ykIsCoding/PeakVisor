import { AfterContentInit, AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { ImageModule } from 'primeng/image';
import { CardModule } from 'primeng/card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-photocard',
  standalone: true,
  imports: [CardModule, RouterModule, ImageModule,CommonModule],
  templateUrl: './photo-card.component.html',
  styleUrl: './photo-card.component.css'
})

export class PhotoCardComponent implements OnInit{
  
  @Input() name:String = '';
  @Input() content:any;
  img='';

  constructor(private router:Router){
    
  }


  ngOnInit(): void {
    this.img =( this.content.result?.image.source) ?? ''
  }
  handleClick(){
    window.open(this.content.result.eventUrl,"_blank")
  }


}
