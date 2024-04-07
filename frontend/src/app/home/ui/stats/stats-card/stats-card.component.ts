import { AfterContentInit, Component, Input, OnInit, inject } from '@angular/core';
import { AuthService } from '@app/shared/data-access/auth/auth.service';

@Component({
  selector: 'app-stats-card',
  standalone: true,
  imports: [],
  templateUrl: './stats-card.component.html',
  styleUrl: './stats-card.component.css'
})

export class StatsCardComponent implements OnInit {
  @Input() mode:string = 'app'
  
  authService:AuthService = inject(AuthService)
  data:any = []
  ngOnInit(): void {
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