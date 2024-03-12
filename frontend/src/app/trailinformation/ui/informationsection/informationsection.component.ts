import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-informationsection',
  standalone: true,
  imports: [],
  templateUrl: './informationsection.component.html',
  styleUrl: './informationsection.component.css'
})
export class InformationsectionComponent {
  @Input() content:string= '';
  @Input() sectionHeader:string = ''
}
