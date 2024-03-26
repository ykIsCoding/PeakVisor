import { bootstrapApplication } from '@angular/platform-browser';
import { importProvidersFrom } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app/app.component';
import { AppConfig } from './app/app.config';

bootstrapApplication(AppComponent, {
  providers: [
    ...AppConfig.providers, 
    importProvidersFrom(
      HttpClientModule, 
      BrowserAnimationsModule,
    ),
  ],
}).catch((err) => console.error(err));