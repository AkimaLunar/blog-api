import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { UsersService } from '../../services/users.service';
import { Subscription } from 'rxjs/Subscription';

import { User } from '../../models/user';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
  providers: [AuthService, UsersService]
})
export class NavigationComponent implements OnInit {

  loggedInSubscription: Subscription;
  loggedIn: Boolean;
  user: User;
  constructor(
    private auth: AuthService,
    private usersService: UsersService
    ) {}

  ngOnInit() {
    this.loggedInSubscription = this.auth.loggedIn$.subscribe(loggedIn => {
      this.loggedIn = loggedIn;
      if (loggedIn === true) {
        this.setUser();
      }
    });
  }

  setUser(): void {
    const _currentUserId: string = this.auth.getCurrentUser();
    console.log(_currentUserId);
    if (_currentUserId) {
      this.usersService.getUserById(_currentUserId)
        .then(user => this.user = user);
    }
  }
  login() {
    this.auth.login();
  }
  logout() {
    this.auth.logout();
  }
}
