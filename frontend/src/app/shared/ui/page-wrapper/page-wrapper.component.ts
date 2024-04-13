import { AfterContentInit, Component, OnInit, inject } from '@angular/core';
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
import { FooterComponent } from "../footer/footer.component";
import { IconButtonComponent } from '../icon-button/icon-button.component';
import { AsyncPipe, CommonModule } from '@angular/common';
import { LoaderComponent } from '../loader/loader.component';
import { SelectLoading } from '@app/shared/feature/state/display-state/display-state.selector';
import { Load, Unload } from '@app/shared/feature/state/display-state/display-state.actions';
import { NgIcon } from '@ng-icons/core';
import { Login, Logout } from '@app/shared/feature/state/auth-state/auth-state.actions';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
/**
 * This is the pagewrapper component
 * This is the parent component for several page components
 * The component contains common functions and data for the child components to use
 */

@Component({
    selector: 'app-pagewrapper',
    standalone: true,
    templateUrl: './page-wrapper.component.html',
    styleUrl: './page-wrapper.component.css',
    imports: [ToastModule,ButtonModule, ButtonComponent, SidebarComponent, HeaderComponent, IconButtonComponent, AsyncPipe, CommonModule, LoaderComponent, NgIcon, FooterComponent]
})

export class PageWrapperComponent{
  sidebarVisible:boolean = false;
  authState$:Observable<boolean>;
  nrouter:Router = inject(Router)
  loadingState$:Observable<boolean>; //move to state
  constructor(public messageService:MessageService, public store:Store<AppState>){
    this.authState$ = this.store.select(SelectAuthenticated)
    this.loadingState$ = this.store.select(SelectLoading)

    var loggedIn:any = localStorage.getItem("logindata")??''
    if(loggedIn){
      loggedIn = JSON.parse(loggedIn)
    }
    
   
    if(loggedIn && Number(loggedIn.token_manager.expirationTime)>Date.now()){
      this.store.dispatch(Login(loggedIn))
    }
  }

  /**
 * This function displays the success toast (notification) to the user
 */
  displaySuccessToast(header:string,message:string){
    this.messageService.add({ severity: 'success', summary: header, detail: message });
  }

  /**
 * This function displays the error toast (notification) to the user
 */
  displayErrorToast(header:string,message:string){
      this.messageService.add({ severity: 'error', summary: header, detail: message });
  }

/**
 * This function toggles the loading page
 */
  toggleLoader(b:boolean){
    b?this.store.dispatch(Load()):this.store.dispatch(Unload())
  }

  /**
 * This function handles logging out through the side bar
 */
  sidebarLogout(){
    console.log("logging out")
    this.store.dispatch(Logout())
    this.nrouter.navigateByUrl('/')
    localStorage.removeItem("logindata")
  }

  /**
 * This function toggles the visibility of the sidebar
 */
  toggleSidebarVisible(){
    this.sidebarVisible=!this.sidebarVisible
  }
}
