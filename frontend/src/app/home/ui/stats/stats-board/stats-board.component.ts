import { Component } from '@angular/core';

import { StatsCardComponent } from '../stats-card/stats-card.component';

@Component({
  selector: 'app-stats-board',
  standalone: true,
  imports: [StatsCardComponent],
  providers: [],
  templateUrl: './stats-board.component.html',
  styleUrls: ['./stats-board.component.css']
})

export class StatsBoardComponent {}