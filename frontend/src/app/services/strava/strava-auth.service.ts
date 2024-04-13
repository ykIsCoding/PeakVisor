import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from '@environments/environment';

/**
 * This is the strava auth service that will query the backend named 'backend'
 */
@Injectable({
  providedIn: 'root'
})

export class StravaAuthService {
  private backendUrl = environment.stravaBackendUrl; 

  constructor(private http: HttpClient, private router: Router) { }

   /**
 * This redirects the user to Strava's website to authorise peakvisor's access to their data
 */
  redirectToStravaAuth(currentUrl: string,uid:string) {
    const stateParameter = encodeURIComponent(currentUrl);
    //window.open(`${this.backendUrl}/strava/auth?state=${stateParameter}&uid=${uid}`,"_blank")
    window.location.href = `${this.backendUrl}/strava/auth?state=${stateParameter}&uid=${uid}`; 
  }

  /**
 * This retreives the list of activities of the user on strava, takes in the access token that is needed to make API calls to strava
 */
  async getActivities(code:string){
    
    try{
      const url = `http://localhost:3100/strava/activities?code=${code}`
      const data = await new Promise<any>(resolve =>  this.http.get(url
      ).subscribe(c=>resolve(c)))
      
      return data 
    }catch(e){
      return {status:"failure",message:"Something went wrong. Please try again."}
    }
  }

  handleStravaCallback(code: string) {

  }
}
