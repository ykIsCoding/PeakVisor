import { AfterContentInit, Component, DoCheck, Input, OnChanges, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menubutton',
  standalone: true,
  imports: [DropdownModule, FormsModule],
  templateUrl: './menubutton.component.html',
  styleUrl: './menubutton.component.css'
})


 
export class MenubuttonComponent {
  @Input() label:String='';
  options:ButtonOptions[];
  selectedOption:ButtonOptions = {name: 'Menu', code: ''}

  constructor(private router:Router){
    this.options = [
      {name: 'Menu', code: ''},
      {name: 'Profile', code: '/profile'},
      {name: 'Settings', code: '/settings'},
      {name: 'Logout', code: '/logout'}
  ];
  }


  handleChange(e:ButtonOptions){
    this.selectedOption = e;
    console.log(e)
  }

  


}

interface ButtonOptions {
  name: string,
  code: string
}