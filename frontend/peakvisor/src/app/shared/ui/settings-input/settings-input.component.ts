import { Component } from '@angular/core';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-settingsinput',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './settings-input.component.html',
  styleUrl: './settings-input.component.css'
})

export class SettingsInputComponent {
  value:any = "";
}
