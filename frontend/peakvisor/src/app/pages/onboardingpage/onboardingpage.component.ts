import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { ButtonComponent } from '../../components/button/button.component';

@Component({
  selector: 'app-onboardingpage',
  standalone: true,
  imports: [NavbarComponent, ButtonComponent],
  templateUrl: './onboardingpage.component.html',
  styleUrl: './onboardingpage.component.css'
})
export class OnboardingpageComponent {

}
