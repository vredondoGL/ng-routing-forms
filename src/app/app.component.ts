import { Component, OnDestroy } from '@angular/core';
import { LoginService } from './views/login/login.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {

  public title = 'app';
  public isUserAuthenticated = false;

  private subscriptions: Subscription;

  constructor(private loginService: LoginService) {
    this.subscriptions = new Subscription();
    this.bindObservables();
  }

  public logout(event: MouseEvent): void {
    event.preventDefault();
    this.loginService.logoutUser();
  }

  public ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  private bindObservables(): void {
    this.subscriptions.add(
      this.loginService.isUserAuthenticated().subscribe(value => this.isUserAuthenticated = value)
    );
  }
}
