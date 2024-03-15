import { Component } from '@angular/core';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { ChildrenOutletContexts, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { provideLottieOptions } from 'ngx-lottie';
import { HomePage } from './home/feature/home.page';
import { SlideTopDownAnimation } from './shared/ui/transitions/slide-top-down-animation';
import { BrowserAnimationsModule, provideAnimations } from '@angular/platform-browser/animations';
import { MessageService } from 'primeng/api';
import { PageWrapperComponent } from './shared/ui/page-wrapper/page-wrapper.component';

@Component({
  selector: 'app-root',
  standalone: true,
  providers:[MessageService],
  imports: [RouterOutlet, RouterLinkActive, RouterLink, HomePage, PageWrapperComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  animations: [SlideTopDownAnimation]
})

export class AppComponent {
  title = 'peakvisor';
  constructor(private contexts: ChildrenOutletContexts, private messageService:MessageService) {}

  getRouteAnimationData() {
    return this.contexts.getContext('primary')?.route?.snapshot?.data?.['animation'];
  }

}