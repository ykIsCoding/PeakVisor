import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { provideLottieOptions } from 'ngx-lottie';
import { HomepageComponent } from './pages/homepage/homepage.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLinkActive,RouterLink, HomepageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'peakvisor';
}

