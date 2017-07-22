import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';

import { User } from '../../models/user';
import { UsersService } from '../../services/users.service';
import { Post } from '../../models/post';
import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
  providers: [PostsService]
})
export class UserProfileComponent implements OnInit {
  user: User;
  self: boolean;
  editing: boolean;
  posts: Post[];
  constructor(
    private usersService: UsersService,
    private postsService: PostsService,
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
        this.postsService.getPostsByUserId(user._id)
          .then(posts => this.posts = posts);
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
