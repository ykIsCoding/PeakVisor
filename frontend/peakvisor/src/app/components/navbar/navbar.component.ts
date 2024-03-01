import { Component, Input } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { SvgComponent } from '../svg/svg.component';
import { ButtonComponent} from '../button/button.component';
import { IconbuttonComponent } from '../iconbutton/iconbutton.component';
import { AsyncPipe, CommonModule } from '@angular/common';
import { AppState } from '../../state/app.state';
import { Store, provideState } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectAuthenticated } from '../../state/authState/authState.selector';
import { BrowserModule } from '@angular/platform-browser';
import { authStateReducer } from '../../state/authState/authState.reducer';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [ButtonModule,SvgComponent,ButtonComponent,IconbuttonComponent, CommonModule, AsyncPipe],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  authState$:Observable<boolean>;
  constructor(private store:Store<AppState>){
    this.authState$ = this.store.select(selectAuthenticated)
  }
  @Input() dlmodeOnly:boolean = false;
}
