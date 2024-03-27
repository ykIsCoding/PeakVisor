import { bootstrapApplication } from '@angular/platform-browser';
import { importProvidersFrom } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {matMenuRound} from "@ng-icons/material-icons/round"
import { AppComponent } from './app/app.component';
import { AppConfig } from './app/app.config';
import { NgIconsModule } from '@ng-icons/core';

bootstrapApplication(AppComponent, {
  providers: [
    ...AppConfig.providers, 
    importProvidersFrom(
      HttpClientModule, 
      BrowserAnimationsModule,
      NgIconsModule.withIcons({matMenuRound })
    ),
  ],
}).catch((err) => console.error(err));