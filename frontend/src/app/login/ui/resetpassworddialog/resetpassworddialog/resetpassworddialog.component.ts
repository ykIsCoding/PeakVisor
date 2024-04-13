import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '@app/shared/data-access/auth/auth.service';
import { ToastService } from '@app/shared/data-access/toast/toast.service';
import { ButtonComponent } from '@app/shared/ui/button/button.component';
import { PageWrapperComponent } from '@app/shared/ui/page-wrapper/page-wrapper.component';
import { TextInputComponent } from '@app/shared/ui/text-input/textinput.component';
import { MessageService } from 'primeng/api';
import {DialogModule} from 'primeng/dialog';

 /**
 * This is the password reset dialog component
 */
@Component({
  selector: 'app-resetpassworddialog',
  standalone: true,
  imports: [DialogModule,TextInputComponent,ReactiveFormsModule,CommonModule,ButtonComponent],
  templateUrl: './resetpassworddialog.component.html',
  styleUrl: './resetpassworddialog.component.css'
})
export class ResetpassworddialogComponent extends PageWrapperComponent{
  @Input() display:boolean = false;
  @Output() displayStatus = new EventEmitter<boolean>();
  authService:AuthService = inject(AuthService)
  resetPasswordForm = new FormGroup({
    email: new FormControl('',[Validators.email,Validators.required]),
    otp: new FormControl('',[Validators.required]),
    newpassword:new FormControl('',[Validators.required,Validators.minLength(8)]),
    reenternewpassword:new FormControl('',[Validators.required,Validators.minLength(8)])
  })

   /**
 * This is the getter for email from the form group
 */
  get email(){
    return this.resetPasswordForm.get('email')
  }

  /**
 * This is the getter for otp from the form group
 */
  get otp(){
    return this.resetPasswordForm.get('otp')
  }

  /**
 * This is the getter for password from the form group
 */
  get newpassword(){
    return this.resetPasswordForm.get('newpassword')
  }

  /**
 * This is the getter for re-entered password from the form group
 */
  get reenternewpassword(){
    return this.resetPasswordForm.get('reenternewpassword')
  }
  
  /**
 * This is to close the password reset dialog
 */
  closeDialog(){
    this.displayStatus.emit(false);
  }

   /**
 * This checks if the password and the re-entered password match
 */
  checkIfPasswordsMatch(){
    return this.newpassword?.value===this.reenternewpassword?.value
  }

   /**
 * This sends the password reset email to the user
 */
  async sendPasswordResetEmail(){
    const data = await this.authService.passwordReset(this.resetPasswordForm.value.email as string)
    if(data && data.status=="failure"){
      this.displayErrorToast("Password Reset Email Not Sent","Something went wrong. Please try again.")
    }else{
      this.displaySuccessToast("Password Changed", "Don't forget next time!")
      this.closeDialog()
    }
    return
  }

  

}
