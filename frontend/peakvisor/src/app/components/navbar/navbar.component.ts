import { Component, Input } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { SvgComponent } from '../svg/svg.component';
import { ButtonComponent} from '../button/button.component';
import { IconbuttonComponent } from '../iconbutton/iconbutton.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [ButtonModule,SvgComponent,ButtonComponent,IconbuttonComponent, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  @Input() dlmodeOnly:boolean = false;
}
