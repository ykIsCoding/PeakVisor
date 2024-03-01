import { Component } from '@angular/core';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-settingsinput',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './settingsinput.component.html',
  styleUrl: './settingsinput.component.css'
})
export class SettingsinputComponent {
  value:any = "";
}
