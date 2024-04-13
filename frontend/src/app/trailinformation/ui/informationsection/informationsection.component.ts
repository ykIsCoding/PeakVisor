import { Component, Input } from '@angular/core';

/**
 * This is the information section component within the trails information
 * It is for consistency of layout
 */
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
