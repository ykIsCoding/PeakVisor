import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '@app/shared/data-access/auth/auth.service';
import { GraphicsLoaderService } from '@app/shared/data-access/graphics-loader/graphics-loader.service';
import { ToastService } from '@app/shared/data-access/toast/toast.service';
import { AppState } from '@app/shared/feature/state/app-state/app.state';
import { Login } from '@app/shared/feature/state/auth-state/auth-state.actions';
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
  disabled:boolean = false;
  currentlyEditing = 0;
  authService: AuthService= inject(AuthService)
  sentOTP: string = '';
  router:Router = inject(Router)

  identifier:string = "";
  signUpForm = new FormGroup({
    email: new FormControl('',[Validators.required,Validators.email]),
    password: new FormControl('',[Validators.required,Validators.minLength(8)]),
    name: new FormControl('',[Validators.required, this.validateName]),
    reenterpassword: new FormControl('',[Validators.required,Validators.minLength(8)]),
    otp: new FormControl('',[Validators.required])
  })

  get email(){
    return this.signUpForm.get('email')
  }

  get password(){
    return this.signUpForm.get('password')
  }

  get name(){
    return this.signUpForm.get('name')
  }

  get onetimepassword(){
    return this.signUpForm.get('otp')
  }

  get reenterpassword(){
    return this.signUpForm.get('reenterpassword')
  }

  checkIfPasswordsMatch(){
    return this.password?.value===this.reenterpassword?.value
  }
  
  constructor(private authservice: AuthService, messageService:MessageService,store:Store<AppState>,private graphicsLoaderService:GraphicsLoaderService){
    super(messageService,store)
    this.src = this.graphicsLoaderService.getGraphic('signupphoto')
  }

  async getOTP(){
    let d = await this.authService.getOTP(this.signUpForm.value.email as string)
    if(d && d.status=="failure"){
      this.displayErrorToast("OTP Not Sent","Please check that you have entered a valid email.")
    }else{
      this.sentOTP = d.otp as string;
      this.identifier = d["identifier"] ?? ""
      this.disabled = true
      this.displaySuccessToast("OTP Sent","Please check your email.")
    }
    setTimeout(() => {
      this.disabled = false
    }, 120000);
  }

  async register(){
    const res = await this.authService.register(this.signUpForm.value.email as string,this.signUpForm.value.password as string,this.signUpForm.value.name as string,this.identifier,this.signUpForm.value.otp as string)
    console.log(res)
    if(res["status"]=="success"){
      
      this.store.dispatch(Login(res))
      this.router.navigateByUrl('/onboarding')
      this.displaySuccessToast("Registration Successful","Welcome to the community!")
      localStorage.setItem("logindata", JSON.stringify(res));
      
    }else{
      this.displayErrorToast("Registration Unsuccessful","Something went wrong. Please try again.")
    }
  }

  async signUpNextStage(){
    // this.stage=1;
    const enteredOTP = this.signUpForm.value.otp as string;
    console.log(enteredOTP);
    console.log(this.sentOTP);

    if (enteredOTP == this.sentOTP) this.stage = 1;
    else this.displayErrorToast("Wrong OTP", "Please try again.");
  }

  validateName(control: AbstractControl): {[key: string]: any} | null {
    const nameRegex = /^[a-zA-Z ]+$/; // Regex to allow only alphabets and space
    if (!nameRegex.test(control.value)) {
      return { 'invalidName': true };
    }
    return null;
  }
}
