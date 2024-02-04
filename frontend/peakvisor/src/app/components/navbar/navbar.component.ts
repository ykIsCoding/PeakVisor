import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { SvgComponent } from '../svg/svg.component';
import { ButtonComponent} from '../button/button.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [ButtonModule,SvgComponent,ButtonComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

}
