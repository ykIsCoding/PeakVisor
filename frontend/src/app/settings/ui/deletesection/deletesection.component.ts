import { Component } from '@angular/core';
import { ButtonComponent } from '@app/shared/ui/button/button.component';
import { FieldsetModule } from 'primeng/fieldset';

@Component({
  selector: 'app-deletesection',
  standalone: true,
  imports: [ButtonComponent, FieldsetModule],
  templateUrl: './deletesection.component.html',
  styleUrl: './deletesection.component.css'
})
export class DeletesectionComponent {

}
