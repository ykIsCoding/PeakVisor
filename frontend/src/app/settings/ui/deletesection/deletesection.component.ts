import { Component, inject, input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@app/shared/data-access/auth/auth.service';
import { AppState } from '@app/shared/feature/state/app-state/app.state';
import { Logout } from '@app/shared/feature/state/auth-state/auth-state.actions';
import { ButtonComponent } from '@app/shared/ui/button/button.component';
import { Store } from '@ngrx/store';
import { FieldsetModule } from 'primeng/fieldset';

/**
 * This is the delete section to show the button and information related to deletion of account
 */
@Component({
  selector: 'app-deletesection',
  standalone: true,
  imports: [ButtonComponent, FieldsetModule],
  templateUrl: './deletesection.component.html',
  styleUrl: './deletesection.component.css'
})
export class DeletesectionComponent {
  authService = inject(AuthService)
  router = inject(Router)
  

  constructor(public store:Store<AppState>){
    
  }

  /**
 * This calls the auth service which will handle the deletion of the account
 * logs the user out if successful
 */
  async deleteAccount(){
    try{
    (await this.authService.getUid()).subscribe(async e=>{
      var id:any = await e;
      console.log(id)
      if(!id && localStorage.getItem("logindata")){
        id = JSON.parse(localStorage.getItem("logindata")??'')['uid']
      }
      this.authService.deleteAccount(id)
      this.store.dispatch(Logout())
      localStorage.removeItem("logindata")
      this.router.navigateByUrl('/')
    })
  }catch(e){
    console.log(e)
  }
  }
}
