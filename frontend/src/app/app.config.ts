import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideState, provideStore } from '@ngrx/store';

import { AppRoutes } from './app.routes';
import { AuthStateReducer } from './shared/feature/state/auth-state/auth-state.reducer';
import { ToastModule } from 'primeng/toast';
import { ToastService } from './shared/data-access/toast/toast.service';

export const AppConfig: ApplicationConfig = {
    
  providers: [
    provideRouter(AppRoutes), 
    provideAnimations(), 
    provideStore(), 
    provideState({name: 'authState', reducer: AuthStateReducer})
],

};
