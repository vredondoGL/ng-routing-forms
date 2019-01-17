import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared';
import { UserProfileComponent } from './user-profile.component';
import { UsernameValidator } from './username.validator';

@NgModule({
  declarations: [UserProfileComponent, UsernameValidator],
  imports: [ SharedModule ],
  exports: [UserProfileComponent],
  providers: [],
})
export class UserProfileModule { }
