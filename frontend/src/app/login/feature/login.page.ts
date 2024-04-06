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
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ResetpassworddialogComponent } from '../ui/resetpassworddialog/resetpassworddialog/resetpassworddialog.component';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [ResetpassworddialogComponent,HeaderComponent, TextInputComponent,CommonModule, ButtonComponent, ButtonModule,SidebarComponent, IconButtonComponent,AsyncPipe,ReactiveFormsModule],
  providers:[GraphicsLoaderService],
  templateUrl: './login.page.html',
  styleUrl: './login.page.css'
})

export class LoginPage extends PageWrapperComponent {
  src:string;
  display:boolean = false;
  authService: AuthService= inject(AuthService)
  
  router: Router = inject(Router)
  loginForm = new FormGroup({
    email: new FormControl('',[Validators.email,Validators.required]),
    password: new FormControl('',[Validators.required]),
  })

  get email(){
    return this.loginForm.get('email')
  }

  get password(){
    return this.loginForm.get('password')
  }

  constructor(private authservice: AuthService, messageService:MessageService,store:Store<AppState>,private graphicsLoaderService:GraphicsLoaderService){
    super(messageService,store)
    this.src = this.graphicsLoaderService.getGraphic('mbs')
  }

  async login(){
    try {
    let data = await this.authService.login(this.loginForm.value.email as string,this.loginForm.value.password as string)
    if(data["status"]=="success"){
      this.store.dispatch(Login(data))
      this.router.navigateByUrl('/profile')
      this.displaySuccessToast("Login Successful","Welcome back!")
    }else{
      // Set error message for invalid password
      const passwordControl = this.loginForm.get('password');
      if (passwordControl) passwordControl.setErrors({ 'invalidPassword': true });
      this.displayErrorToast("Login Unsuccessful","An error occurred. Please try again.")
    } } catch (error) {
      console.error("Login error:", error);
      this.displayErrorToast("Login Unsuccessful", "An error occurred. Please try again.");
    }
  }

  setDisplayStatus(value:boolean){
    this.display = value
  }

  async changePassword(){
    this.display = true;
  }

  async logout(){
    let data = await this.authService.login(this.loginForm.value.email as string,this.loginForm.value.password as string)
  }

  async resetPassword(){
    
  }
  
}
