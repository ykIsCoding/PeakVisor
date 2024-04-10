import { AfterContentInit, Component, OnInit, inject } from '@angular/core';
import { AsyncPipe, CommonModule, Location } from '@angular/common';

import { ProfilestatsComponent } from '@app/profile/ui/profilestats/profilestats.component';
import { ButtonComponent } from '@app/shared/ui/button/button.component';
import { GridsectionComponent } from '@app/shared/ui/gridsection/gridsection.component';
import { HeaderComponent } from '@app/shared/ui/header/header.component';

import { StravaAuthService } from '@app/services/strava/strava-auth.service';
import { FooterComponent } from '@app/shared/ui/footer/footer.component';
import { AuthService } from '@app/shared/data-access/auth/auth.service';
import { CardComponent } from '@app/profile/ui/card/card.component';
import { PageWrapperComponent } from '@app/shared/ui/page-wrapper/page-wrapper.component';
import { MessageService } from 'primeng/api';
import { AppState } from '@app/shared/feature/state/app-state/app.state';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-profilepage',
  standalone: true,
  imports: [HeaderComponent,ButtonComponent,GridsectionComponent,ProfilestatsComponent,FooterComponent,CommonModule,CardComponent, AsyncPipe],
  templateUrl: './profilepage.component.html',
  styleUrl: './profilepage.component.css'
})
export class ProfilepageComponent extends PageWrapperComponent implements OnInit,AfterContentInit{
  connected:boolean = false;
  userid:any = ''
  stats = { total_trips: 0, total_distance: 0 }
  content = [{name:'June 10 Hike'},{name:'June 20 Hike'},{name:'June 30 Hike'},]
  authService:AuthService = inject(AuthService)
  constructor(
    private stravaAuthService: StravaAuthService,
    private location: Location,
    messageService:MessageService,
    store:Store<AppState>
  ){
    super(messageService,store)
  }

  async retreiveUID(){
    try{
    var uidObservable = new Promise(async resolve=>(await this.authService.getUid()).subscribe(a=>{
      resolve(a)
    }))
    var uid = await uidObservable
    let creds:any =   localStorage.getItem("logindata");
    creds = JSON.parse(creds)
    if(!uid && creds){
      uid = creds["uid"]
    }
    var udata = await this.authService.getUserStats(uid as string)
    this.connected = udata.data && udata.data.strava && String(udata.data.strava).length>0 && String(udata.data.strava)!='Not Connected'
    this.stats = udata.data.stravaData
    console.log(this.stats)
    this.userid = uid
    let cnt = await this.stravaAuthService.getActivities(udata.data.stravaData.code)
    this.content = cnt;
    console.log(cnt)
    }catch(e){
      console.log(e)
    }
  }

  ngAfterContentInit(): void {
    this.retreiveUID()
  }

  ngOnInit(): void {
      
      
      //change state n set connected to true
  }
  
  async requestStravaAuth() {
    
    let creds:any =   localStorage.getItem("logindata");
    creds = JSON.parse(creds)
    try{
    
    console.log(creds)
    var uidObservable = new Promise(async resolve=>(await this.authService.getUid()).subscribe(a=>{
      resolve(a)
    }))
    var uid = await uidObservable
    
    if(!uid && creds){
      uid = creds["uid"]
    }
    const currentUrl: string = window.location.href;
    this.stravaAuthService.redirectToStravaAuth(currentUrl,uid as string);
    
  }
catch(e){
  this.displayErrorToast("Connection Unsuccessful","Something went wrong.")
  console.log(e)
}
  }
}
