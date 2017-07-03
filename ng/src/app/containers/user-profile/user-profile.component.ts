import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';

import { User } from '../../models/user';
import { UsersService } from '../../services/users.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
  providers: [UsersService, AuthService]
})
export class UserProfileComponent implements OnInit {
  user: User;
  self: boolean;
  constructor(
    private usersService: UsersService,
    private route: ActivatedRoute,
    private location: Location,
    private auth: AuthService
  ) { }

  ngOnInit() {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.usersService.getUserById(params.get('id')))
      .subscribe(user => this.user = user);
      if (this.auth.getCurrentUser() === this.user._id) {
        this.self = true;
      }
  }

}
