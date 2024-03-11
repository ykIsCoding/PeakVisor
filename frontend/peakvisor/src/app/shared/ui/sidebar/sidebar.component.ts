import { Component, Input } from '@angular/core';
import { SidebarModule } from 'primeng/sidebar';
@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [SidebarModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  @Input() sidebarVisible = false;
}
