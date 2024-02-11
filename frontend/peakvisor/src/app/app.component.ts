import { Component } from '@angular/core';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { ChildrenOutletContexts, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { provideLottieOptions } from 'ngx-lottie';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { slideTopDownAnimation } from '../transitions/slideTopDownAnimation';
import { BrowserAnimationsModule, provideAnimations } from '@angular/platform-browser/animations';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLinkActive,RouterLink, HomepageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  animations: [
    slideTopDownAnimation
  ]
})




export class AppComponent {
  title = 'peakvisor';
  constructor(private contexts: ChildrenOutletContexts) {}

getRouteAnimationData() {
  return this.contexts.getContext('primary')?.route?.snapshot?.data?.['animation'];
}

}

