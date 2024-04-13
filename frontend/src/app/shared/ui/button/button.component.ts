import { CommonModule } from '@angular/common';
import { Component,EventEmitter,Input, Output } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
/**
 * This is the button component
 * This enables code-reuse and separation of concerns.
 */
@Component({
  selector: 'app-button',
  standalone: true,
  imports: [ButtonModule, RouterModule,CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})

export class ButtonComponent {
  @Input() link:boolean = false;
  @Input() icon:any;
  @Input() disabled:boolean = false;
  @Input() class:string='';
  @Input() routerLink:string = '';
  @Input() label:string = '';
  @Input() severity:string = '';
  @Input() text:boolean = false;
  @Input() fn:Function= ()=>null;
  @Output() $onClk = new EventEmitter();

  /**
 * This emits the event when the button is clicked.
 */
  public handleClick():void{
    if(this.disabled) return
    this.$onClk.emit();
  }

}
