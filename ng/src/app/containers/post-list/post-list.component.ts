import { Component, OnInit } from '@angular/core';

import { Post } from '../../models/post';
import { PostsService } from '../../services/posts.service';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
  providers: []
})
export class PostListComponent implements OnInit {
  posts: Post[];
  constructor(
    public postsService: PostsService,
    public usersService: UsersService
  ) { }

  ngOnInit() {
    this.postsService.getPosts()
      .then(posts => this.posts = posts);
  }

}
