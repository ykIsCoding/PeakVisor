import { Component, Input } from '@angular/core';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { ImageModule } from 'primeng/image';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-photocard',
  standalone: true,
  imports: [CardModule, RouterModule, ImageModule],
  templateUrl: './photo-card.component.html',
  styleUrl: './photo-card.component.css'
})

export class PhotoCardComponent {
  @Input() routerLink:string = "";
  @Input() name:String = '';
  @Input() linkTo:any;
  constructor(private router:Router){}
  handleClick(){
    console.log(this.linkTo)
    this.router.navigateByUrl(this.linkTo)
  }
}
