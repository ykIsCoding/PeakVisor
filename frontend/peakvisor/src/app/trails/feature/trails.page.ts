import { Component } from '@angular/core';

import { HeaderComponent } from '@app/shared/ui/header/header.component';
import { VideoComponent } from '@app/shared/ui/video/video.component';
import { PhotoCardComponent } from '@app/shared/ui/photo-card/photo-card.component';

@Component({
  selector: 'app-trails-page',
  standalone: true,
  imports: [HeaderComponent, VideoComponent, PhotoCardComponent],
  templateUrl: './trails.page.html',
  styleUrl: './trails.page.css'
})

export class TrailsPage {

}
