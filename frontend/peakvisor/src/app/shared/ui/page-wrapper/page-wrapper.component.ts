import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { AppState } from '@app/shared/feature/state/app-state/app.state';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { SelectAuthState, SelectAuthenticated } from '@app/shared/feature/state/auth-state/auth-state.selector';
import { ToastService } from '@app/shared/data-access/toast/toast.service';

@Component({
  selector: 'app-pagewrapper',
  standalone: true,
  imports: [ToastModule],
  templateUrl: './page-wrapper.component.html',
  styleUrl: './page-wrapper.component.css'
})

export class PageWrapperComponent {

  authState$:Observable<boolean>;
  constructor(public messageService:MessageService, public store:Store<AppState>){
    this.authState$ = this.store.select(SelectAuthenticated)
  }

  showToast(msg:string){
    this.messageService.add({severity:'success',summary:msg,detail:'completed'})
  }

}
