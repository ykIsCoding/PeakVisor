import { AfterViewInit, Component, OnInit, inject } from '@angular/core';
import { HeaderComponent } from '@app/shared/ui/header/header.component';
import { SettingsInputComponent } from '@app/shared/ui/settings-input/settings-input.component';
import { DeletesectionComponent } from '../ui/deletesection/deletesection.component';
import { AuthService } from '@app/shared/data-access/auth/auth.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators, AbstractControl } from '@angular/forms';
import { AppState } from '@app/shared/feature/state/app-state/app.state';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { SelectUserId } from '@app/shared/feature/state/auth-state/auth-state.selector';
import { ButtonComponent } from '@app/shared/ui/button/button.component';
import { CommonModule } from '@angular/common';
import { PasswordchangesectionComponent } from '../ui/passwordchangesection/passwordchangesection.component';
import { PageWrapperComponent } from '@app/shared/ui/page-wrapper/page-wrapper.component';
import { MessageService } from 'primeng/api';
import { FooterComponent } from '@app/shared/ui/footer/footer.component';

@Component({
  selector: 'app-settingspage',
  standalone: true,
  imports: [HeaderComponent, SettingsInputComponent,FooterComponent,DeletesectionComponent,PasswordchangesectionComponent,ReactiveFormsModule,ButtonComponent,CommonModule],
  templateUrl: './settings.page.html',
  styleUrl: './settings.page.css'
})

export class SettingsPage extends PageWrapperComponent implements AfterViewInit, OnInit {
  authService = inject(AuthService)
  userId$:any;
  currentlyEditing = 0;
  settingsForm = new FormGroup({
    name: new FormControl('',Validators.required),
    strava: new FormControl(''),
    email:new FormControl('',[Validators.required,Validators.email])
  })

  get name() {
    return this.settingsForm.get('name')
  }

  get strava() {
    return this.settingsForm.get('strava')
  }

  get email() {
    return this.settingsForm.get('email')
  }

  ngOnInit(): void {
      this.settingsForm =new FormGroup({
        name: new FormControl('',[Validators.required, this.validateName]),
        strava: new FormControl('',Validators.required),
        email:new FormControl('',[Validators.required,Validators.email])
      })
      console.log(this.settingsForm)
  }

  setCurrentlyEditing(num:number){
    if(!this.settingsForm.valid){
      this.displayErrorToast("Saving failed","Please fix the input errors.")
    }else{
      
      
      this.store.select(SelectUserId).subscribe(d=>{
        const {email,name,strava} = this.settingsForm.value
        this.currentlyEditing = num
        if(num==0){
        this.authService.update(email??'',name??'',strava??'',d).then(res=>{
          
          if(res["status"]=="failure") throw new Error
          
            this.displaySuccessToast("Changes saved","yay")
          
          
        }).catch(e=>{
          
          this.displayErrorToast("Changes not saved.","Something went wrong.")
        })
      }  })
    
    }
  }

  constructor(messageService:MessageService,store:Store<AppState>){
    super(messageService,store)
    this.userId$ = (store.select(SelectUserId)).subscribe(d=>{
      
      this.authService.getUserSettings(d).then(userdata=>{
        
        userdata = {...userdata}
        this.settingsForm.setValue({
              name: userdata.name ?? '',
              strava:userdata.strava ?? 'Not Connected',
              email:userdata.email ?? ''
        })
      })
    

    })
  }

  ngAfterViewInit(): void {
      
  }

  unlinkStrava(){
    this.store.select(SelectUserId).subscribe(d=>{
      this.authService.unlinkStrava(d).then((e)=>{
        
        if(e['status']=='Success'){
          
          this.settingsForm.setValue({
            name: this.settingsForm.value.name??' ',
            strava:'Not Connected',
            email:this.settingsForm.value.email??''
      })
          this.displaySuccessToast("Changes saved.","Strava Unlinked")
        }
      }).catch((e)=>{
        console.log(e)
        this.displayErrorToast("Changes not saved.","Something went wrong.")
      })
      
    })
    
  }


  validateName(control: AbstractControl): {[key: string]: any} | null {
    const nameRegex = /^[a-zA-Z ]+$/; // Regex to allow only alphabets and space
    if (!nameRegex.test(control.value)) {
      return { 'invalidName': true };
    }
    return null;
  }

}
