import { Component, Input, OnInit } from '@angular/core';
import { User } from "@lean/api-interfaces";

@Component({
  selector: 'lean-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css'],
})
export class UserFormComponent implements OnInit {
  @Input()
  user: User;

  constructor() {}

  ngOnInit(): void {}
}
