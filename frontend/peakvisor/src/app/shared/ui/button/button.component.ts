import { Component,Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
@Component({
  selector: 'app-button',
  standalone: true,
  imports: [ButtonModule, RouterModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})

export class ButtonComponent {
  @Input() class:string='';
  @Input() routerLink:string = '';
  @Input() label:string = '';
  @Input() severity:string = '';
  @Input() text:boolean = false;
}
