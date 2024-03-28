import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { AppState } from '@app/shared/feature/state/app-state/app.state';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { SelectAuthState, SelectAuthenticated } from '@app/shared/feature/state/auth-state/auth-state.selector';
import { ToastService } from '@app/shared/data-access/toast/toast.service';
import { ButtonComponent } from '../button/button.component';
import { Sidebar } from 'primeng/sidebar';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { HeaderComponent } from '../header/header.component';
import { IconButtonComponent } from '../icon-button/icon-button.component';
import { AsyncPipe, CommonModule } from '@angular/common';
import { LoaderComponent } from '../loader/loader.component';
import { SelectLoading } from '@app/shared/feature/state/display-state/display-state.selector';
import { Load, Unload } from '@app/shared/feature/state/display-state/display-state.actions';
import { NgIcon } from '@ng-icons/core';

@Component({
  selector: 'app-pagewrapper',
  standalone: true,
  imports: [ToastModule, ButtonComponent,SidebarComponent, HeaderComponent,IconButtonComponent,AsyncPipe, CommonModule,LoaderComponent,NgIcon],
  templateUrl: './page-wrapper.component.html',
  styleUrl: './page-wrapper.component.css'
})

export class PageWrapperComponent {
  sidebarVisible:boolean = false;
  authState$:Observable<boolean>;
  loadingState$:Observable<boolean>; //move to state
  constructor(public messageService:MessageService, public store:Store<AppState>){
    this.authState$ = this.store.select(SelectAuthenticated)
    this.loadingState$ = this.store.select(SelectLoading)
    
  }

  displaySuccessToast(header:string,message:string){
    this.messageService.add({ severity: 'success', summary: header, detail: message });
  }

  displayErrorToast(header:string,message:string){
      this.messageService.add({ severity: 'error', summary: header, detail: message });
  }


  toggleLoader(b:boolean){
    b?this.store.dispatch(Load()):this.store.dispatch(Unload())
  }

  toggleSidebarVisible(){
    this.sidebarVisible=!this.sidebarVisible
  }
}
