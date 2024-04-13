import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '@app/shared/data-access/auth/auth.service';
import { first } from 'rxjs';
/**
 * This is the auth guard to prevent unauthorised page access if user is not authenticated
 * they will be redirected to 404 page of not authorised
 */
export const authGuard: CanActivateFn =  async (route, state) => {

  const router = inject(Router)
  const authservice = inject(AuthService)
  var authState = authservice.getAuthStatus()
  var authenticated = new Promise(async resolve=>(await authState).subscribe(a=>{
    resolve(a)
  }))
  var r = await authenticated
  if(r){
    return true
  }else{
    router.navigateByUrl('/**')
    return false;
  }
};
