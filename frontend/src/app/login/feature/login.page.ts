import { Component, inject } from '@angular/core';
import { HeaderComponent } from '@app/shared/ui/header/header.component';
import { TextInputComponent } from '@app/shared/ui/text-input/textinput.component';
import { ButtonComponent } from '@app/shared/ui/button/button.component';
import { ButtonModule } from 'primeng/button';
import { ToastComponent } from '@app/shared/ui/toast/toast.component';
import { ToastModule } from 'primeng/toast';
import { PageWrapperComponent } from '@app/shared/ui/page-wrapper/page-wrapper.component';
import { Login } from '@app/shared/feature/state/auth-state/auth-state.actions';
import { AuthService } from '@app/shared/data-access/auth/auth.service';
import { Store } from '@ngrx/store';
import { MessageService } from 'primeng/api';
import { AppState } from '@app/shared/feature/state/app-state/app.state';
import { ToastService } from '@app/shared/data-access/toast/toast.service';
import { GraphicsLoaderService } from '@app/shared/data-access/graphics-loader/graphics-loader.service';
import { SidebarComponent } from '@app/shared/ui/sidebar/sidebar.component';
import { IconButtonComponent } from '@app/shared/ui/icon-button/icon-button.component';
import { AsyncPipe, CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [HeaderComponent, TextInputComponent,CommonModule, ButtonComponent, ButtonModule,SidebarComponent, IconButtonComponent,AsyncPipe,ReactiveFormsModule],
  providers:[GraphicsLoaderService],
  templateUrl: './login.page.html',
  styleUrl: './login.page.css'
})

export class LoginPage extends PageWrapperComponent {
  src:string;
  authService: AuthService= inject(AuthService)
  router: Router = inject(Router)
  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  })

  constructor(private authservice: AuthService, messageService:MessageService,store:Store<AppState>,private graphicsLoaderService:GraphicsLoaderService){
    super(messageService,store)
    this.src = this.graphicsLoaderService.getGraphic('mbs')
  }

  async login(){
    let data = await this.authService.login(this.loginForm.value.email as string,this.loginForm.value.password as string)
    if(data["status"]=="success"){
      this.store.dispatch(Login(data))
      this.router.navigateByUrl('/profile')
    }
  }

  async logout(){
    let data = await this.authService.login(this.loginForm.value.email as string,this.loginForm.value.password as string)
    console.log(data)
  }

  async resetPassword(){
    
  }
  
}
