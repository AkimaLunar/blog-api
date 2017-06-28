import { Component, OnInit } from '@angular/core';

import { Post } from '../../models/post';
import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
  providers: [PostsService]
})
export class PostListComponent implements OnInit {
  posts: Post[];
  constructor(private postsService: PostsService) { }

  ngOnInit() {
    this.postsService.getPosts()
      .then(posts => this.posts = posts);
  }

}
