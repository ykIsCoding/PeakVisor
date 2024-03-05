import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { RouterModule } from '@angular/router'; // Needed if your header uses routerLink
import { ButtonModule } from 'primeng/button'; // Assuming ButtonModule is where app-button is declared

@NgModule({
  imports: [CommonModule, RouterModule, ButtonModule],
  declarations: [HeaderComponent],
  exports: [HeaderComponent],
})
export class HeaderModule {}