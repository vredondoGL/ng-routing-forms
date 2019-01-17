import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent, PageNotFoundComponent } from './views';
import { AppRoutingModule } from './app-routing.module';
import { LoginModule } from './views/login';
import { UsersListModule } from './views/users';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    UsersListModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
