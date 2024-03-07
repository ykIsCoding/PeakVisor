import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeaderComponent } from '@app/shared/ui/header/header.component';
import { AboutComponent } from '../ui/about/about.component';
import { HeroComponent } from '../ui/hero/hero.component';
import { StatsBoardComponent } from '../ui/stats/stats-board/stats-board.component';
import { TrailsComponent } from '../ui/trails/trails.component';
import { VideoBackground } from '../ui/video-background/video-background.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, AboutComponent, HeroComponent, StatsBoardComponent, TrailsComponent, VideoBackground],
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class HomePage {
  constructor() {}
}




