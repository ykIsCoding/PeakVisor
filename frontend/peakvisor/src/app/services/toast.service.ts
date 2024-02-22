import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(public messageService:MessageService) { }

  showToast(msg:string){
    this.messageService.add({severity:'success',summary:msg,detail:'completed'})
  }
  
}
