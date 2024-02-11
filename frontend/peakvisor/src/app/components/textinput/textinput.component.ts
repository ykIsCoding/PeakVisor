import { Component, Input } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-textinput',
  standalone: true,
  imports: [InputTextModule],
  templateUrl: './textinput.component.html',
  styleUrl: './textinput.component.css'
})
export class TextinputComponent {
  value:String = ""
  @Input() data:String=""
}
