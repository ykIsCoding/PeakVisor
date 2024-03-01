import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { LoginpageComponent } from './pages/loginpage/loginpage.component';
import { SignuppageComponent } from './pages/signuppage/signuppage.component';
import { AlltrailspageComponent } from './pages/alltrailspage/alltrailspage.component';
import { Error404pageComponent } from './pages/error404page/error404page.component';
import { OnboardingpageComponent } from './pages/onboardingpage/onboardingpage.component';
import { SettingspageComponent } from './pages/settingspage/settingspage.component';

export const routes: Routes = [
    {
        path:'',
        component:HomepageComponent,
        data: { animation: 'nextPage' }
    },
    {
        path:'alltrails',
        component:AlltrailspageComponent,
        data: { animation: 'nextPage' }
    },
    {
        path:'login',
        component:LoginpageComponent,
        data: { animation: 'nextPage' }
    },
    {
        path:'signup',
        component:SignuppageComponent,
        data: { animation: 'nextPage' }
    },
    {
        path:'onboarding',
        component:OnboardingpageComponent,
        data: { animation: 'nextPage' }
    },
    {
        path:'settings',
        component:SettingspageComponent,
        data: { animation: 'nextPage' }
    },
    { path: '**', component: Error404pageComponent, data: { animation: 'nextPage' }}
];
