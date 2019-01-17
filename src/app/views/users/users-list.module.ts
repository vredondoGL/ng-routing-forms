import { NgModule } from '@angular/core';

import { SharedModule } from 'src/app/shared';
import { UsersListComponent } from './users-list.component';
import { UserChipModule } from './user-chip';
import { UserProfileModule } from './user-profile';
import { UserService } from './user.service';

@NgModule({
  declarations: [UsersListComponent],
  imports: [ SharedModule, UserChipModule, UserProfileModule ],
  exports: [UsersListComponent, UserProfileModule ],
  providers: [UserService],
})
export class UsersListModule {}
