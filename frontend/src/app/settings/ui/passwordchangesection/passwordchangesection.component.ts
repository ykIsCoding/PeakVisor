import { Component, Input, inject } from '@angular/core';
import { AuthService } from '@app/shared/data-access/auth/auth.service';
import { ButtonComponent } from '@app/shared/ui/button/button.component';
import { PageWrapperComponent } from '@app/shared/ui/page-wrapper/page-wrapper.component';
import { FieldsetModule } from 'primeng/fieldset';

@Component({
  selector: 'app-passwordchangesection',
  standalone: true,
  imports: [FieldsetModule,ButtonComponent],
  templateUrl: './passwordchangesection.component.html',
  styleUrl: './passwordchangesection.component.css'
})


export class PasswordchangesectionComponent extends PageWrapperComponent{
  authService:AuthService = inject(AuthService)
  @Input() email:string='';
  async changePassword(){
    const data = await this.authService.passwordReset(this.email as string)
    if(data && data.status=="failure"){
      this.displayErrorToast("Password Reset Email Not Sent","Something went wrong. Please try again.")
    }else{
      this.displaySuccessToast("A password reset email has been sent to you", "Check your email!")
    }
    return
  }
}
