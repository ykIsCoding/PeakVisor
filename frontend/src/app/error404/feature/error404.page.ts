import { Component } from '@angular/core';
import { GraphicsLoaderService } from '@app/shared/data-access/graphics-loader/graphics-loader.service';
import { HeaderComponent } from '@app/shared/ui/header/header.component';

/**
 * This is the 404 error page fallback component
 * It is shown when a page that does not exist or is not accessible is accessed
 */

@Component({
  selector: 'app-error404-page',
  standalone: true,
  imports: [HeaderComponent],
  providers:[GraphicsLoaderService],
  templateUrl: './error404.page.html',
  styleUrl: './error404.page.css'
})


export class Error404Page {
  src:string;
  constructor(private graphicsLoaderService:GraphicsLoaderService){
    this.src= this.graphicsLoaderService.getGraphic('404')
  }
}
