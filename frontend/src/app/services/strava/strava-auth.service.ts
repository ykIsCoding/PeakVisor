import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from '@environments/environment';

@Injectable({
  providedIn: 'root'
})

export class StravaAuthService {
  private backendUrl = environment.stravaBackendUrl; 

  constructor(private http: HttpClient, private router: Router) { }

  redirectToStravaAuth(currentUrl: string,uid:string) {
    const stateParameter = encodeURIComponent(currentUrl);
    window.open(`${this.backendUrl}/strava/auth?state=${stateParameter}&uid=${uid}`,"_blank")
    //window.location.href = `${this.backendUrl}/strava/auth?state=${stateParameter}`; 
  }

  handleStravaCallback(code: string) {

  }
}
