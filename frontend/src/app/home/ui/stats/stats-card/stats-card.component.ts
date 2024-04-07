import { AfterContentInit, Component, Input, inject } from '@angular/core';
import { AuthService } from '@app/shared/data-access/auth/auth.service';

@Component({
  selector: 'app-stats-card',
  standalone: true,
  imports: [],
  templateUrl: './stats-card.component.html',
  styleUrl: './stats-card.component.css'
})

export class StatsCardComponent implements AfterContentInit {
  @Input() mode:string = 'app'
  @Input() uid:string='';
  authService:AuthService = inject(AuthService)
  data:any = []
  ngAfterContentInit(): void {
      if(this.mode=='app'){
        this.authService.getAppStats().then((x)=>{
          //add to array
        })

      }else if(this.mode=='user'){
        this.authService.getUserStats(this.uid).then((x)=>{
          //add to array
        })
      }
  }
}