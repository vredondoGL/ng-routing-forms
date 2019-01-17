import { AbstractControl, ValidatorFn, ValidationErrors, AsyncValidator, NG_ASYNC_VALIDATORS } from '@angular/forms';
import { UserService } from '../user.service';

import { User } from '../models';
import { Directive, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Directive({
  selector: '[appUsernameTaken]',
  providers: [{ provide: NG_ASYNC_VALIDATORS, useExisting: UsernameValidator, multi: true}]
})
export class UsernameValidator implements AsyncValidator {

  @Input()
  userID: string;

  constructor(private userService: UserService) { }

  validate(c: AbstractControl): Observable<ValidationErrors> | null {
    return this.userService.isUsernameTaken({ id: this.userID, username: c.value }).pipe(
      map(response => {
      return response ? { usernameTaken: true } : null;
    }));
  }
}

export function NotUsernameTest(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    return control.value === 'test@test.com' ? { usernameTest: true } : null;
  };
}
