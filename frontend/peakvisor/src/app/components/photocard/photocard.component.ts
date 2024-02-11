import { Component, Input } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';

import { CardModule } from 'primeng/card';
@Component({
  selector: 'app-photocard',
  standalone: true,
  imports: [CardModule,RouterModule],
  templateUrl: './photocard.component.html',
  styleUrl: './photocard.component.css'
})
export class PhotocardComponent {
  @Input() routerLink:string = "";
}
