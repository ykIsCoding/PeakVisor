import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomePage } from './home/feature/home.page';
import { LoginPage } from './login/feature/login.page';
import { SignupPage } from './signup/feature/signup.page';
import { TrailsPage } from './trails/feature/trails.page';
import { Error404Page } from './error404/feature/error404.page';
import { OnboardingPage } from './onboarding/feature/onboarding.page';
import { SettingsPage } from './settings/feature/settings.page';
import { EventspageComponent } from './eventspage/feature/eventspage.component';
import { ProfilepageComponent } from './profile/features/profilepage/profilepage.component';
import { TrailinformationComponent } from './trailinformation/feature/trailinformation.component';

export const AppRoutes: Routes = [
    {
        path: '',
        component: HomePage,
        data: { animation: 'nextPage' }
    },
    {
        path: 'trails',
        component: TrailsPage,
        data: { animation: 'nextPage' }
    },
    {
        path: 'login',
        component: LoginPage,
        data: { animation: 'nextPage' }
    },
    {
        path: 'signup',
        component: SignupPage,
        data: { animation: 'nextPage' }
    },
    {
        path: 'onboarding',
        component: OnboardingPage,
        data: { animation: 'nextPage' }
    },
    {
        path: 'settings',
        component: SettingsPage,
        data: { animation: 'nextPage' }
    },
    {
        path: 'events',
        component: EventspageComponent,
        data: { animation: 'nextPage' }
    },
    {
        path: 'profile',
        component: ProfilepageComponent,
        data: { animation: 'nextPage' }
    },
    {
        path: 'trailinfo',
        component: TrailinformationComponent,
        data: { animation: 'nextPage' }
    },
    { 
        path: '**', 
        component: Error404Page, 
        data: { animation: 'nextPage' }
    }
];
