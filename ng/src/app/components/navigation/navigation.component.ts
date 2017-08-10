import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { Subscription } from 'rxjs/Subscription';

import { User } from '../../models/user';
import { Post } from '../../models/post';
import { PostsService } from '../../services/posts.service';

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
    public usersService: UsersService,
    public postsService: PostsService,
    ) {}

  ngOnInit() {
    this.loggedInSubscription = this.usersService.loggedIn$.subscribe(loggedIn => {
      this.loggedIn = loggedIn;
    });
    this.userSubscription = this.usersService.currentUser$.subscribe(user => this.user = user);
    this.postsService.searchPosts('cats');
  }

  onLogin() {
    this.usersService.login();
  }
  onLogout() {
    this.usersService.logout();
  }
}
