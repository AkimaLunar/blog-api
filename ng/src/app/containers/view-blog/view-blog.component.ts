import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';

import { Post } from '../../models/post';
import { PostsService } from '../../services/posts.service';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-view-blog',
  templateUrl: './view-blog.component.html',
  styleUrls: ['./view-blog.component.css'],
  providers: [PostsService]
})
export class ViewBlogComponent implements OnInit {
  self: Boolean;
  post: Post;
  constructor(
    private postsService: PostsService,
    private route: ActivatedRoute,
    private location: Location,
    private usersService: UsersService
  ) { }

  ngOnInit(): void {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.postsService.getPostById(params.get('id')))
      .subscribe(post => {
        this.post = post;
        this.self = this.usersService.self(this.post.author.userId);
      });
  }

  onEdit() {
    alert('NOT READY!');
  }
  onDelete() {
    this.postsService.deletePostById(this.post._id, this.post.author.userId);
  }

}
