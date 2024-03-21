import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '@app/shared/data-access/auth/auth.service';
import { GraphicsLoaderService } from '@app/shared/data-access/graphics-loader/graphics-loader.service';
import { AppState } from '@app/shared/feature/state/app-state/app.state';
import { ButtonComponent } from '@app/shared/ui/button/button.component';
import { PageWrapperComponent } from '@app/shared/ui/page-wrapper/page-wrapper.component';
import { TextInputComponent } from '@app/shared/ui/text-input/textinput.component';
import { Store } from '@ngrx/store';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-signup-page',
  standalone: true,
  imports: [TextInputComponent,ButtonComponent,CommonModule,ReactiveFormsModule],
  providers:[GraphicsLoaderService],
  templateUrl: './signup.page.html',
  styleUrl: './signup.page.css'
})

export class SignupPage extends PageWrapperComponent{
  src:String;
  stage:number=0;
  otp:string='';
  authService: AuthService= inject(AuthService)
  identifier:string = "";
  signUpForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
    name: new FormControl(''),
    reenterpassword: new FormControl(''),
    otp: new FormControl('')
  })
  
  constructor(private authservice: AuthService, messageService:MessageService,store:Store<AppState>,private graphicsLoaderService:GraphicsLoaderService){
    super(messageService,store)
    this.src = this.graphicsLoaderService.getGraphic('signupphoto')
  }

  async getOTP(){
    let d = await this.authService.getOTP(this.signUpForm.value.email as string)
    
    this.identifier = d["identifier"] ?? ""
  }

  async register(){
    await this.authService.register(this.signUpForm.value.email as string,this.signUpForm.value.password as string,this.signUpForm.value.name as string,this.identifier,this.signUpForm.value.otp as string)
  }

  signUpNextStage(){
    this.stage=1;
  }
}
