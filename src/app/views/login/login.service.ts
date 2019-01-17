import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class LoginService {

  private _isUserAuthenticated: BehaviorSubject<boolean>;

  constructor (private router: Router) {
    const isAlreadyAthenticated = localStorage.getItem('isAuthenticated');
    this._isUserAuthenticated = new BehaviorSubject(isAlreadyAthenticated ? true : false);
  }

  public isUserAuthenticated(): Observable<boolean> {
    return this._isUserAuthenticated;
  }

  public authenticatedUser(): void {
    localStorage.setItem('isAuthenticated', 'true');
    this._isUserAuthenticated.next(true);
  }

  public logoutUser(): void {
    localStorage.removeItem('isAuthenticated');
    this._isUserAuthenticated.next(false);
    this.router.navigate(['/home']);
  }
}
