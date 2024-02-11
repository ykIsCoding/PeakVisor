import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { TextinputComponent } from '../../components/textinput/textinput.component';
import { ButtonComponent } from '../../components/button/button.component';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-loginpage',
  standalone: true,
  imports: [NavbarComponent, TextinputComponent,ButtonComponent, ButtonModule],
  templateUrl: './loginpage.component.html',
  styleUrl: './loginpage.component.css'
})
export class LoginpageComponent {

}
