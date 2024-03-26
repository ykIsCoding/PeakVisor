import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from '@environments/environment';

@Injectable({
  providedIn: 'root'
})

export class StravaAuthService {
  private backendUrl = environment.backendUrl; 

  constructor(private http: HttpClient, private router: Router) { }

  redirectToStravaAuth(currentUrl: string) {
    const stateParameter = encodeURIComponent(currentUrl);
    window.location.href = `${this.backendUrl}/strava/auth?state=${stateParameter}`; 
  }

  handleStravaCallback(code: string) {

  }
}
