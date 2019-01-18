import { Component, OnInit } from '@angular/core';
import { User } from './models';
import { Router } from '@angular/router';
import { UserService } from './user.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  public users: User[] = [];

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.getUsers();
  }

  public goToEditUser(user: User): void {
    this.router.navigate([`/users/${user.id}`]);
  }

  private getUsers(): void {
    this.userService.getUsers().subscribe((response: User[]) => {
      this.users = response;
    });
  }
}
