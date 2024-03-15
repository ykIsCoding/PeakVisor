import { Component } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { TextInputComponent } from '../text-input/textinput.component';

@Component({
  selector: 'app-settingsinput',
  standalone: true,
  imports: [ButtonComponent,TextInputComponent],
  templateUrl: './settings-input.component.html',
  styleUrl: './settings-input.component.css'
})

export class SettingsInputComponent {
  value:any = "";
}
