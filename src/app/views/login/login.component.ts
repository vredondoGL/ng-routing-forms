import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private subscriptions: Subscription;

  constructor(private loginService: LoginService, private router: Router) {
    this.subscriptions = new Subscription();
    this.bindObservables();
  }

  ngOnInit(): void { }

  public login(loginForm: NgForm): void {
    console.log(loginForm.form.value);
    this.loginService.authenticatedUser();
  }

  private bindObservables(): void {
    this.subscriptions.add(
      this.loginService.isUserAuthenticated().subscribe(isUserAuthenticated => {
        if (isUserAuthenticated) {
          this.router.navigate(['/users']);
        }
      })
    );
  }
}
