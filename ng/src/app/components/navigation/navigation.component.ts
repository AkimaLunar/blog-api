import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { Subscription } from 'rxjs/Subscription';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

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
  searchQueries$: Subject<string> = new Subject<string>();

  constructor(
    public usersService: UsersService,
    public postsService: PostsService,
    ) {}

  ngOnInit() {
    this.loggedInSubscription = this.usersService.loggedIn$.subscribe(loggedIn => {
      this.loggedIn = loggedIn;
    });
    this.userSubscription = this.usersService.currentUser$.subscribe(user => this.user = user);
    this.searchQueries$
      .debounceTime(500)
      .distinctUntilChanged()
      .subscribe(query => this.postsService.searchPosts(query));
  }

  onLogin() {
    this.usersService.login();
  }
  onLogout() {
    this.usersService.logout();
  }
}
