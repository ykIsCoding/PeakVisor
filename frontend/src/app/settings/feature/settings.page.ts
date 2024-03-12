import { Component } from '@angular/core';
import { HeaderComponent } from '@app/shared/ui/header/header.component';
import { SettingsInputComponent } from '@app/shared/ui/settings-input/settings-input.component';

@Component({
  selector: 'app-settingspage',
  standalone: true,
  imports: [HeaderComponent, SettingsInputComponent],
  templateUrl: './settings.page.html',
  styleUrl: './settings.page.css'
})

export class SettingsPage {

}
