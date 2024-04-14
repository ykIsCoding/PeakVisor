import { AfterContentInit, Component, Input, OnInit, inject } from '@angular/core';
import { AuthService } from '@app/shared/data-access/auth/auth.service';
/**
 * This is the stats card component for homepage
 */
@Component({
  selector: 'app-stats-card',
  standalone: true,
  imports: [],
  templateUrl: './stats-card.component.html',
  styleUrl: './stats-card.component.css'
})

export class StatsCardComponent implements AfterContentInit {
  @Input() mode:string = 'app'
  
  authService:AuthService = inject(AuthService)
  data:any = []

  /**
 * This is the lifecycle method for Angular to execute some functions when the component is rendered
 */
  ngAfterContentInit(): void {
    if(this.mode=='app'){
      this.authService.getAppStats().then((x)=>{
        //add to array
        this.data = x.data
        
        if(x["status"]=="failure") throw "failure"
      }).catch((e)=>{
        console.log(e)
      })

    }
  }
}