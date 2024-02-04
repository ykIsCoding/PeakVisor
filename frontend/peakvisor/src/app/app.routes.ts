import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { LoginpageComponent } from './pages/loginpage/loginpage.component';
import { SignuppageComponent } from './pages/signuppage/signuppage.component';
import { AlltrailspageComponent } from './pages/alltrailspage/alltrailspage.component';
import { Error404pageComponent } from './pages/error404page/error404page.component';

export const routes: Routes = [
    {
        path:'',
        component:HomepageComponent
    },
    {
        path:'alltrails',
        component:AlltrailspageComponent
    },
    {
        path:'login',
        component:LoginpageComponent
    },
    {
        path:'signup',
        component:SignuppageComponent
    },
    { path: '**', component: Error404pageComponent}
];
