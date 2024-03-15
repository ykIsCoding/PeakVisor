import { CommonModule } from '@angular/common';
import { AfterContentInit, Component, Input, ViewChild } from '@angular/core';
import { animate, glide, spring, stagger } from "motion"

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  providers:[],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})

export class HeroComponent implements AfterContentInit{
  @Input() heading:string=''
  @Input() subheading:string=''
  @Input() content:any;
 
  ngAfterContentInit(){
    animate(
      "h1",
      { y: [-50,0],
        opacity:[0,1]
      },
      {
        delay: stagger(0.1),
        duration: 0.5,
        easing: spring({stiffness: 50,damping: 200})
      }
    )
  }

}