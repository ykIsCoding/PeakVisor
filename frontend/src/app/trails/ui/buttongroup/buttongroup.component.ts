import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonComponent } from '@app/shared/ui/button/button.component';

@Component({
  selector: 'app-buttongroup',
  standalone: true,
  imports: [ButtonComponent,CommonModule],
  templateUrl: './buttongroup.component.html',
  styleUrl: './buttongroup.component.css'
})
export class ButtongroupComponent {
  handleClick(){
    console.log("hola")
  }
}
