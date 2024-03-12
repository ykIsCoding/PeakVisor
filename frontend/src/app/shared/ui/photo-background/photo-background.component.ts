import { AfterContentInit, Component, Input } from '@angular/core';
import { AuthService } from '@app/shared/data-access/auth/auth.service';
import { PageWrapperComponent } from '../page-wrapper/page-wrapper.component';
import { MessageService } from 'primeng/api';
import { Store } from '@ngrx/store';
import { AppState } from '@app/shared/feature/state/app-state/app.state';
import { GraphicsLoaderService } from '@app/shared/data-access/graphics-loader/graphics-loader.service';
import { ImageModule } from 'primeng/image';
@Component({
  selector: 'app-photo-background',
  standalone: true,
  imports: [ImageModule],
  templateUrl: './photo-background.component.html',
  styleUrl: './photo-background.component.css'
})
export class PhotoBackgroundComponent extends PageWrapperComponent implements AfterContentInit {
  @Input() src:string =""
  constructor(private authservice: AuthService, messageService:MessageService,store:Store<AppState>,private graphicsLoaderService:GraphicsLoaderService){
    super(messageService,store)
    
  }

  ngAfterContentInit(): void {
      this.src = "https://trevallog.com/wp-content/uploads/2021/04/Detailed-Guide-to-Visiting-MacRitchie-Reservoir.jpg"
  }
  
}
