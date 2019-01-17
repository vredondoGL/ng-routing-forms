import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { User } from '../models';
import { UserService } from '../user.service';
import { NotUsernameTest } from './username.validator';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  public user: User;
  public userForm: FormGroup;

  constructor(private route: ActivatedRoute, private fb: FormBuilder, private userService: UserService) { }

  ngOnInit(): void {
    this.user = this.route.snapshot.data['user'];
    this.buildForm();
  }

  private buildForm(): void {
    this.userForm = this.fb.group({
      name: [this.user.name, [Validators.required, Validators.min(1)]],
      username: [
        this.user.username,
        [
          Validators.required,
          Validators.email,
          NotUsernameTest()
        ]
      ],
      country: [this.user.country, [Validators.required, Validators.min(1)]],
    });
  }
}
