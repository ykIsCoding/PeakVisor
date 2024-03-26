import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonComponent } from '@app/shared/ui/button/button.component';
import { TextInputComponent } from '@app/shared/ui/text-input/textinput.component';
import {DialogModule} from 'primeng/dialog';
@Component({
  selector: 'app-resetpassworddialog',
  standalone: true,
  imports: [DialogModule,TextInputComponent,ReactiveFormsModule,CommonModule,ButtonComponent],
  templateUrl: './resetpassworddialog.component.html',
  styleUrl: './resetpassworddialog.component.css'
})
export class ResetpassworddialogComponent {
  @Input() display:boolean = false;
  @Output() displayStatus = new EventEmitter<boolean>();

  resetPasswordForm = new FormGroup({
    email: new FormControl('',[Validators.email,Validators.required]),
    otp: new FormControl('',[Validators.required]),
    newpassword:new FormControl('',[Validators.required,Validators.minLength(8)]),
    reenternewpassword:new FormControl('',[Validators.required,Validators.minLength(8)])
  })
  get email(){
    return this.resetPasswordForm.get('email')
  }

  get otp(){
    return this.resetPasswordForm.get('otp')
  }

  get newpassword(){
    return this.resetPasswordForm.get('newpassword')
  }

  get reenternewpassword(){
    return this.resetPasswordForm.get('reenternewpassword')
  }
  
  closeDialog(){
    this.displayStatus.emit(false);
  }

  checkIfPasswordsMatch(){
    return this.newpassword?.value===this.reenternewpassword?.value
  }

  async resetPassword(){

  }

  async getOTP(){
    
  }

}
