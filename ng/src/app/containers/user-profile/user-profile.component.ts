import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';

import { User } from '../../models/user';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
  providers: []
})
export class UserProfileComponent implements OnInit {
  user: User;
  self: boolean;
  editing: boolean;
  constructor(
    private usersService: UsersService,
    private route: ActivatedRoute,
    private location: Location,
  ) { }

  ngOnInit() {
    this.editing = false;
    this.route.paramMap
      .switchMap((params: ParamMap) => this.usersService.getUserById(params.get('id')))
      .subscribe(user => {
        this.user = user;
        this.self = this.usersService.self(this.user._id);
      });

  }

  setSelf(id: string): void {

  }

  onLogout() {
    this.usersService.logout();
  }

  onEdit() {
      this.editing = !this.editing;
  }

  onUpdateUser() {
    this.usersService.updateUser(this.user);
    this.editing = false;
  }


}
