import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared';

import { UserChipComponent } from './user-chip.component';

@NgModule({
  declarations: [UserChipComponent],
  imports: [ SharedModule ],
  exports: [UserChipComponent],
  providers: [],
})
export class UserChipModule { }
