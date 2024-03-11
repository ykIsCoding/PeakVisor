import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { AppState } from '@app/shared/feature/state/app-state/app.state';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { SelectAuthState, SelectAuthenticated } from '@app/shared/feature/state/auth-state/auth-state.selector';
import { ToastService } from '@app/shared/data-access/toast/toast.service';
import { ButtonComponent } from '../button/button.component';
import { Sidebar } from 'primeng/sidebar';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { HeaderComponent } from '../header/header.component';
import { IconButtonComponent } from '../icon-button/icon-button.component';
import { AsyncPipe, CommonModule } from '@angular/common';

@Component({
  selector: 'app-pagewrapper',
  standalone: true,
  imports: [ToastModule, ButtonComponent,SidebarComponent, HeaderComponent,IconButtonComponent,AsyncPipe, CommonModule],
  templateUrl: './page-wrapper.component.html',
  styleUrl: './page-wrapper.component.css'
})

export class PageWrapperComponent {
  sidebarVisible:boolean = false;
  authState$:Observable<boolean>;
  constructor(public messageService:MessageService, public store:Store<AppState>){
    this.authState$ = this.store.select(SelectAuthenticated)
  }

  showToast(msg:string){
    this.messageService.add({severity:'success',summary:msg,detail:'completed'})
  }

  toggleSidebarVisible(){
    this.sidebarVisible=!this.sidebarVisible
  }
}
