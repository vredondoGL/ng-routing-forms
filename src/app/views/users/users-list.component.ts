import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { User } from './models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  public users: User[] = [];

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.getUsers();
  }

  public goToEditUser(user: User): void {
    this.router.navigate([`/users/${user.id}`]);
  }

  private getUsers(): void {
    this.http.get<User[]>('http://localhost:4000/users').subscribe((response: User[]) => {
      this.users = response;
    });
  }
}
