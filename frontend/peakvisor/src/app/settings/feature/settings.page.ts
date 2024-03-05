import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { SettingsinputComponent } from '../../components/settingsinput/settingsinput.component';

@Component({
  selector: 'app-settingspage',
  standalone: true,
  imports: [NavbarComponent, SettingsinputComponent],
  templateUrl: './settingspage.component.html',
  styleUrl: './settingspage.component.css'
})
export class SettingspageComponent {

}
