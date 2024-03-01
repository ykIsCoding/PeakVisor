import { Component } from '@angular/core';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { ChildrenOutletContexts, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { provideLottieOptions } from 'ngx-lottie';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { slideTopDownAnimation } from '../transitions/slideTopDownAnimation';
import { BrowserAnimationsModule, provideAnimations } from '@angular/platform-browser/animations';
import { MessageService } from 'primeng/api';
import { PagewrapperComponent } from './components/pagewrapper/pagewrapper.component';

@Component({
  selector: 'app-root',
  standalone: true,
  providers:[MessageService],
  imports: [RouterOutlet, RouterLinkActive,RouterLink, HomepageComponent,PagewrapperComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  animations: [
    slideTopDownAnimation
  ]
})




export class AppComponent {
  title = 'peakvisor';
  constructor(private contexts: ChildrenOutletContexts, private messageService:MessageService) {}

getRouteAnimationData() {
  return this.contexts.getContext('primary')?.route?.snapshot?.data?.['animation'];
}

}

