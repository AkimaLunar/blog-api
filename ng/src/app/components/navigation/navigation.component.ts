import { Component, OnInit, OnChanges } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { Subscription } from 'rxjs/Subscription';

import { User } from '../../models/user';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
  providers: [UsersService]
})
export class NavigationComponent implements OnInit {

  loggedInSubscription: Subscription;
  loggedIn: Boolean;
  user$: Subscription;
  user: User;
  constructor(
    private usersService: UsersService
    ) {}

  ngOnInit() {
    this.loggedInSubscription = this.usersService.loggedIn$.subscribe(loggedIn => {
      this.loggedIn = loggedIn;
    });
    this.user$ = this.usersService.currentUser$.subscribe(user => this.user = user);
  }

  login() {
    this.usersService.login();
  }
  logout() {
    this.usersService.logout();
  }
}
