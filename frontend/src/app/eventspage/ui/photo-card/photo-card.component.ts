import { AfterContentInit, AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { ImageModule } from 'primeng/image';
import { CardModule } from 'primeng/card';
import { CommonModule } from '@angular/common';
 /**
 * This is the photocard to show the content of each event
 */
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

 /**
 * This sets the images from the data retreived to display
 */
  ngOnInit(): void {
    this.img =( this.content.result?.image.source) ?? ''
  }

   /**
 * This redirects the user to the meetup.com event site for the particular event
 */
  handleClick(){
    window.open(this.content.result.eventUrl,"_blank")
  }


}
