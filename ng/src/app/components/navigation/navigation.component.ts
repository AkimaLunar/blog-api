import { Component, OnInit, OnChanges } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { Subscription } from 'rxjs/Subscription';

import { User } from '../../models/user';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
  providers: []
})
export class NavigationComponent implements OnInit, OnChanges {

  loggedInSubscription: Subscription;
  loggedIn: Boolean;
  userSubscribtion: Subscription;
  user: User;
  constructor(
    private usersService: UsersService
    ) {}

  ngOnInit() {
    this.loggedInSubscription = this.usersService.loggedIn$.subscribe(loggedIn => {
      this.loggedIn = loggedIn;
    });
    this.userSubscribtion = this.usersService.currentUser$.subscribe(user => this.user = user);
  }

  ngOnChanges() {
    
  }

  login() {
    this.usersService.login();
  }
  logout() {
    this.usersService.logout();
  }
}
