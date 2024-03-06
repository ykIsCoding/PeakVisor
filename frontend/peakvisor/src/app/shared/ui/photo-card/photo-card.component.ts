import { Component, Input } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
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
}
