import { NgModule } from '@angular/core';

import { SharedModule } from 'src/app/shared';
import { LoginComponent } from './login.component';
import { LoginService } from './login.service';
import { AuthGuard } from './auth-guard.service';

@NgModule({
  declarations: [LoginComponent],
  imports: [ SharedModule ],
  exports: [LoginComponent],
  providers: [LoginService, AuthGuard],
})
export class LoginModule { }
