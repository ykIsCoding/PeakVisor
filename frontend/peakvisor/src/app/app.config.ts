import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideState, provideStore } from '@ngrx/store';
import { authStateReducer } from './state/authState/authState.reducer';
import { ToastModule } from 'primeng/toast';
import { ToastService } from './services/toast.service';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideAnimations(), provideStore(), provideState({name:'authState',reducer:authStateReducer})]
};
