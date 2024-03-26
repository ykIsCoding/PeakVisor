import { AfterViewInit, Component, OnInit, inject } from '@angular/core';
import { HeaderComponent } from '@app/shared/ui/header/header.component';
import { SettingsInputComponent } from '@app/shared/ui/settings-input/settings-input.component';
import { DeletesectionComponent } from '../ui/deletesection/deletesection.component';
import { AuthService } from '@app/shared/data-access/auth/auth.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AppState } from '@app/shared/feature/state/app-state/app.state';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { SelectUserId } from '@app/shared/feature/state/auth-state/auth-state.selector';
import { ButtonComponent } from '@app/shared/ui/button/button.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-settingspage',
  standalone: true,
  imports: [HeaderComponent, SettingsInputComponent,DeletesectionComponent, ReactiveFormsModule,ButtonComponent,CommonModule],
  templateUrl: './settings.page.html',
  styleUrl: './settings.page.css'
})

export class SettingsPage implements AfterViewInit, OnInit {
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
        name: new FormControl('',Validators.required),
        strava: new FormControl('',Validators.required),
        email:new FormControl('',Validators.required)
      })
      console.log(this.settingsForm)
  }

  setCurrentlyEditing(num:number){
    this.currentlyEditing = num
  }

  constructor(store:Store<AppState>){
    console.log("here")
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

}
