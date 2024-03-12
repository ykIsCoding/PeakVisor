import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-textinput',
  standalone: true,
  imports: [InputTextModule],
  templateUrl: './textinput.component.html',
  styleUrl: './textinput.component.css'
})

export class TextInputComponent {
  @Output() value:String = ""
  @Input() data:String=""
}
