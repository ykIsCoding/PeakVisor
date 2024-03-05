import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from @HomePageComponent;
import { LoginPageComponent } from @LoginPageComponent;
import { SignupPageComponent } from @SignupPageComponent;
import { TrailsPageComponent } from @TrailsPageComponent;
import { Error404PageComponent } from @Error404PageComponent;
import { OnboardingPageComponent } from @OnboardingPageComponent;
import { SettingsPageComponent } from @SettingsPageComponent;

const routes: Routes = [
    { path: '', component: HomePageComponent, data: { animation: 'nextPage' } },
    { path: 'alltrails', component: TrailsPageComponent, data: { animation: 'nextPage' } },
    { path: 'login', component: LoginPageComponent, data: { animation: 'nextPage' } },
    { path: 'signup', component: SignupPageComponent, data: { animation: 'nextPage' } },
    { path: 'onboarding', component: OnboardingPageComponent, data: { animation: 'nextPage' } },
    { path: 'settings', component: SettingsPageComponent, data: { animation: 'nextPage' } },
    { path: '**', component: Error404PageComponent, data: { animation: 'nextPage' } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}