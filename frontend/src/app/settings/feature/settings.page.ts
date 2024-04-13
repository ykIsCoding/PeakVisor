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

  /**
 * This is the settings page for the user
 */

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

    /**
 * This is getter to get the name of the user on the settings form group
 */
  get name() {
    return this.settingsForm.get('name')
  }

   /**
 * This is getter to get the strava id of the user on the settings form group
 */
  get strava() {
    return this.settingsForm.get('strava')
  }

   /**
 * This is getter to get the email of the user on the settings form group
 */
  get email() {
    return this.settingsForm.get('email')
  }

   /**
 * This is the lifecycle method for Angular
 * when the component is first initialised, it will set up the settings form with form controls
 */
  ngOnInit(): void {
      this.settingsForm =new FormGroup({
        name: new FormControl('',[Validators.required, this.validateName]),
        strava: new FormControl('',Validators.required),
        email:new FormControl('',[Validators.required,Validators.email])
      })
      
  }

     /**
 * This function checks for form validation when the user is no longer editing
 * if valid, it will call the service that will save the data into firebase database
 */
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

    /**
 * This is the constructor
 * when the page is initialised, it will invoke the authentication service to get data of the user from firebase database
 * set the data to the form group so that they can be displayed to the user
 */
  constructor(messageService:MessageService,store:Store<AppState>){
    super(messageService,store)
    this.userId$ = (store.select(SelectUserId)).subscribe((d:any)=>{
      if(!d && localStorage.getItem("logindata")){
        d = JSON.parse(localStorage.getItem("logindata")??'')["uid"]
      }
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

    /**
 * This function allows user to disconnect their strava
 * Their strava id and data will be removed from the firebase database through the auth service
 */
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

 /**
 * This function check if the name entered by the user is valid
 */
  validateName(control: AbstractControl): {[key: string]: any} | null {
    const nameRegex = /^[a-zA-Z ]+$/; // Regex to allow only alphabets and space
    if (!nameRegex.test(control.value)) {
      return { 'invalidName': true };
    }
    return null;
  }

}
