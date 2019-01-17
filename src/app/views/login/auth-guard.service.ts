import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { LoginService } from './login.service';
import { map } from 'rxjs/operators';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private loginService: LoginService, private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    return this.loginService.isUserAuthenticated().pipe(
      map((isUserAuthenticated: boolean) => {
        if (!isUserAuthenticated) {
          this.router.navigate(['/login']);
        }
        return isUserAuthenticated;
      })
    );
  }
}
