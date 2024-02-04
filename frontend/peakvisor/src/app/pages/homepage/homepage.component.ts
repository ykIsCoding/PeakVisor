import { Component } from '@angular/core';
import { PhotodivComponent } from '../../components/photodiv/photodiv.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { VideoComponent } from '../../components/video/video.component';
import { SvgComponent } from '../../components/svg/svg.component';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [PhotodivComponent, NavbarComponent,VideoComponent,SvgComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {

}
