import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { VideoComponent } from '../../components/video/video.component';
import { PhotocardComponent } from '../../components/photocard/photocard.component';

@Component({
  selector: 'app-alltrailspage',
  standalone: true,
  imports: [NavbarComponent,VideoComponent,PhotocardComponent],
  templateUrl: './alltrailspage.component.html',
  styleUrl: './alltrailspage.component.css'
})
export class AlltrailspageComponent {

}
