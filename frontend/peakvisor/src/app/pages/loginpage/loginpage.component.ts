import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { TextinputComponent } from '../../components/textinput/textinput.component';
import { ButtonComponent } from '../../components/button/button.component';
import { ButtonModule } from 'primeng/button';
import { ToastComponent } from '../../components/toast/toast.component';
import { ToastModule } from 'primeng/toast';
import { PagewrapperComponent } from '../../components/pagewrapper/pagewrapper.component';
import { login } from '../../state/authState/authState.actions';
import { AuthserviceService } from '../../services/authservice.service';
import { Store } from '@ngrx/store';
import { MessageService } from 'primeng/api';
import { AppState } from '../../state/app.state';
import { ToastService } from '../../services/toast.service';

@Component({
  selector: 'app-loginpage',
  standalone: true,
  imports: [NavbarComponent, TextinputComponent,ButtonComponent, ButtonModule],
  templateUrl: './loginpage.component.html',
  styleUrl: './loginpage.component.css'
})
export class LoginpageComponent extends PagewrapperComponent {
  constructor(private authservice:AuthserviceService, messageService:MessageService,store:Store<AppState> ){
    super(messageService,store)
  }



  login(){
    this.store.dispatch(login())
  }
}
