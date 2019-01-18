import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable, of } from 'rxjs';


import { User } from './models';
import { map, catchError } from 'rxjs/operators';
import { UserService } from './user.service';

@Injectable()
export class UserResolver implements Resolve<User> {

  constructor(private userService: UserService, private router: Router) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<User> {
    const userID = route.params['id'];
    if (userID) {
      return this.userService.getUserByID(userID).pipe(
        map((user: User) => {
          return user;
        }),
        catchError(() => {
          console.log('Invalid user id');
          this.router.navigate(['/users']);
          return of(null);
        })
      );
    } else {
      console.log('Invalid user id');
      this.router.navigate(['/users']);
      return of(null);
    }
  }
}
