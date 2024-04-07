import { Component, OnInit, inject } from '@angular/core';
import { AsyncPipe, CommonModule, Location } from '@angular/common';

import { ProfilestatsComponent } from '@app/profile/ui/profilestats/profilestats.component';
import { ButtonComponent } from '@app/shared/ui/button/button.component';
import { GridsectionComponent } from '@app/shared/ui/gridsection/gridsection.component';
import { HeaderComponent } from '@app/shared/ui/header/header.component';

import { StravaAuthService } from '@app/services/strava/strava-auth.service';
import { FooterComponent } from '@app/shared/ui/footer/footer.component';
import { AuthService } from '@app/shared/data-access/auth/auth.service';
import { CardComponent } from '@app/profile/ui/card/card.component';

@Component({
  selector: 'app-profilepage',
  standalone: true,
  imports: [HeaderComponent,ButtonComponent,GridsectionComponent,ProfilestatsComponent,FooterComponent,CommonModule,CardComponent, AsyncPipe],
  templateUrl: './profilepage.component.html',
  styleUrl: './profilepage.component.css'
})
export class ProfilepageComponent implements OnInit{
  connected:boolean = false;
  userid:any = ''
  content = [{name:'June 10 Hike'},{name:'June 20 Hike'},{name:'June 30 Hike'},]
  authService:AuthService = inject(AuthService)
  constructor(
    private stravaAuthService: StravaAuthService,
    private location: Location,
  ){

  }

  async retreiveUID(){
    try{
    var uidObservable = new Promise(async resolve=>(await this.authService.getUid()).subscribe(a=>{
      resolve(a)
    }))
    var uid = await uidObservable
    this.userid = uid
    
    }catch(e){
      console.log(e)
    }
  }

  ngOnInit(): void {
      this.retreiveUID()
  }
  
  async requestStravaAuth() {
    try{
    var uidObservable = new Promise(async resolve=>(await this.authService.getUid()).subscribe(a=>{
      resolve(a)
    }))
    var uid = await uidObservable
    const currentUrl: string = window.location.href;
    this.stravaAuthService.redirectToStravaAuth(currentUrl,uid as string);
  }
catch(e){
  console.log(e)
}
  }
}
