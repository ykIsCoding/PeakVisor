import { Component, Input } from '@angular/core';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { ImageModule } from 'primeng/image';
import { CardModule } from 'primeng/card';
 /**
 * This is the photo card component
 */
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
  /**
 * This redirects the user when the photocard is clicked
 */
  handleClick(){
    console.log(this.linkTo)
    this.router.navigateByUrl(this.linkTo)
  }
}
