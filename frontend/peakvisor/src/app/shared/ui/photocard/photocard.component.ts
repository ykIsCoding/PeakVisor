import { Component, Input } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { ImageModule } from 'primeng/image';
import { CardModule } from 'primeng/card';
@Component({
  selector: 'app-photocard',
  standalone: true,
  imports: [CardModule,RouterModule, ImageModule],
  templateUrl: './photocard.component.html',
  styleUrl: './photocard.component.css'
})
export class PhotocardComponent {
  @Input() routerLink:string = "";
}
