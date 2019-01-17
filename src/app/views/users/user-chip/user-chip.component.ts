import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../models';

@Component({
  selector: 'app-user-chip',
  templateUrl: './user-chip.component.html',
  styleUrls: ['./user-chip.component.css']
})
export class UserChipComponent implements OnInit {

  @Input()
  public user: User;

  @Output()
  public clickOnEdit: EventEmitter<User> = new EventEmitter();

  constructor() { }

  ngOnInit(): void { }
}
