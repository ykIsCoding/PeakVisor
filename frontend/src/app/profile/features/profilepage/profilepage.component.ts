import { Component } from '@angular/core';
import { Location } from '@angular/common';

import { ProfilestatsComponent } from '@app/profile/ui/profilestats/profilestats.component';
import { ButtonComponent } from '@app/shared/ui/button/button.component';
import { GridsectionComponent } from '@app/shared/ui/gridsection/gridsection.component';
import { HeaderComponent } from '@app/shared/ui/header/header.component';

import { StravaAuthService } from '@app/services/strava/strava-auth.service';

@Component({
  selector: 'app-profilepage',
  standalone: true,
  imports: [HeaderComponent,ButtonComponent,GridsectionComponent,ProfilestatsComponent],
  templateUrl: './profilepage.component.html',
  styleUrl: './profilepage.component.css'
})
export class ProfilepageComponent {
  content = [{name:'June 10 Hike'},{name:'June 20 Hike'},{name:'June 30 Hike'},]

  constructor(
    private stravaAuthService: StravaAuthService,
    private location: Location,
  ){

  }
  
  requestStravaAuth(): void {
    const currentUrl: string = window.location.href;
    this.stravaAuthService.redirectToStravaAuth(currentUrl);
  }

}
