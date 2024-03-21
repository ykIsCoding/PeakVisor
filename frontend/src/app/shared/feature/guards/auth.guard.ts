import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '@app/shared/data-access/auth/auth.service';
import { first } from 'rxjs';

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
