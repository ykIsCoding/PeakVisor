import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { AppState } from '../../state/app.state';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectAuthState, selectAuthenticated } from '../../state/authState/authState.selector';
import { ToastService } from '../../services/toast.service';

@Component({
  selector: 'app-pagewrapper',
  standalone: true,
  imports: [ToastModule],
  templateUrl: './pagewrapper.component.html',
  styleUrl: './pagewrapper.component.css'
})
export class PagewrapperComponent {
  authState$:Observable<boolean>;
  constructor(public messageService:MessageService, public store:Store<AppState>){
    this.authState$ = this.store.select(selectAuthenticated)
  }

  showToast(msg:string){
    this.messageService.add({severity:'success',summary:msg,detail:'completed'})
  }
  
}
