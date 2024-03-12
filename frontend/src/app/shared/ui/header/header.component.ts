import { Component, Input } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { AsyncPipe, CommonModule } from '@angular/common';
import { Store, provideState } from '@ngrx/store';
import { Observable } from 'rxjs';
import { BrowserModule } from '@angular/platform-browser';

import { SvgComponent } from '../svg/svg.component';
import { ButtonComponent} from '../button/button.component';
import { IconButtonComponent } from '../icon-button/icon-button.component';
import { AppState } from '@app/shared/feature/state/app-state/app.state';
import { SelectAuthenticated } from '@app/shared/feature/state/auth-state/auth-state.selector';
import { AuthStateReducer } from '@app/shared/feature/state/auth-state/auth-state.reducer';
import { FormsModule } from '@angular/forms';
import { MenubuttonComponent } from '../menubutton/menubutton.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ButtonModule, SvgComponent, ButtonComponent, IconButtonComponent, CommonModule, AsyncPipe, MenubuttonComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})

export class HeaderComponent {

  authState$:Observable<boolean>;
  constructor(private store:Store<AppState>){
    this.authState$ = this.store.select(SelectAuthenticated)
  }
  @Input() dlmodeOnly:boolean = false;

}
