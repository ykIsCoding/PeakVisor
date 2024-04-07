import { AfterContentChecked, AfterContentInit, AfterViewInit, Component, Input, OnInit, inject } from '@angular/core';
import { AuthService } from '@app/shared/data-access/auth/auth.service';

@Component({
  selector: 'app-profilestats',
  standalone: true,
  imports: [],
  templateUrl: './profilestats.component.html',
  styleUrl: './profilestats.component.css'
})
export class ProfilestatsComponent implements AfterViewInit {
  @Input() uid:any='';
  authService:AuthService = inject(AuthService)
  data:any = []

  ngAfterViewInit(): void {
    this.authService.getUserStats(this.uid).then((x)=>{
      //add to array
      //have distance and total trips added to data object
      this.data = x
      if(x["status"]=="failure") throw "failure"
    }).catch((e)=>{
      console.log(e)
    })
  }

  
}
