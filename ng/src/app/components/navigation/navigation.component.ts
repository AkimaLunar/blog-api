import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { Subscription } from 'rxjs/Subscription';

import { User } from '../../models/user';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
  providers: []
})
export class NavigationComponent implements OnInit {

  loggedInSubscription: Subscription;
  loggedIn: Boolean;
  userSubscription: Subscription;
  user: User;
  constructor(
    private usersService: UsersService
    ) {}

  ngOnInit() {
    this.loggedInSubscription = this.usersService.loggedIn$.subscribe(loggedIn => {
      this.loggedIn = loggedIn;
    });
    this.userSubscription = this.usersService.currentUser$.subscribe(user => this.user = user);
  }

  onLogin() {
    this.usersService.login();
  }
  onLogout() {
    this.usersService.logout();
  }
}
