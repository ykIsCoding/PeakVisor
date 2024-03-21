import { AfterContentInit, Component, DoCheck, Input, OnChanges, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { Router, RouterModule } from '@angular/router';
import { SplitButtonModule } from 'primeng/splitbutton';
import { Logout } from '@app/shared/feature/state/auth-state/auth-state.actions';
import { AppState } from '@app/shared/feature/state/app-state/app.state';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-menubutton',
  standalone: true,
  imports: [DropdownModule, FormsModule, SplitButtonModule,RouterModule],
  templateUrl: './menubutton.component.html',
  styleUrl: './menubutton.component.css'
})


 
export class MenubuttonComponent {
  @Input() label:String='';
  options:ButtonOptions[];
  selectedOption:ButtonOptions ={label: 'Menu',  command: () => null}

  constructor(private router:Router,store:Store<AppState>){
    this.options = [
      //to move to main component later
      {label: 'Profile',  command: () =>this.router.navigateByUrl('/profile')},
      {label: 'Events',  command: () =>this.router.navigateByUrl('/events')},
      {label: 'Settings',  command: () => this.router.navigateByUrl('/settings')},
      {label: 'Logout',  command: () => {
        store.dispatch(Logout())
        this.router.navigateByUrl('/')
      }},
    ];
  }


  handleChange(e:ButtonOptions){
    this.selectedOption = e;
    console.log(e)
  }

  


}

interface ButtonOptions {
  label: string,
  command:any
}