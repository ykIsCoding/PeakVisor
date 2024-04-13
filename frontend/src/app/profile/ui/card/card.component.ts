import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CardModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
/**
 * This is the card component to show when the user has not connected to Strava
 */
export class CardComponent {

}
