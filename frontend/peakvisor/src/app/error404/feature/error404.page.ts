import { Component } from '@angular/core';
import { HeaderComponent } from '@app/shared/ui/header/header.component';

@Component({
  selector: 'app-error404-page',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './error404.page.html',
  styleUrl: './error404.page.css'
})

export class Error404Page {

}
