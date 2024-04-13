import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';
 /**
 * This is the injectable service for toast services.
 */
@Injectable({
  providedIn: 'root',
})
export class ToastService {

  constructor(public messageService:MessageService) { }

  
}
