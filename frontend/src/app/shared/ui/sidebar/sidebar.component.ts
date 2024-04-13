import { Component, Input } from '@angular/core';
import { SidebarModule } from 'primeng/sidebar';
/**
 * This is the sidebar component, only rendered on small screen sizes
 */
@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [SidebarModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  @Input() sidebarVisible = false;
  @Input() class:any;

  
}
