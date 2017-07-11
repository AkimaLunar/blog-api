import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';

import { Post } from '../../models/post';
import { AuthService } from '../../services/auth.service';
import { PostsService } from '../../services/posts.service';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-view-photo',
  templateUrl: './view-photo.component.html',
  styleUrls: ['./view-photo.component.css'],
  providers: [AuthService, PostsService, UsersService]
})
export class ViewPhotoComponent implements OnInit {
  post: Post;
  self: Boolean;
  contentChecked: Boolean;
  constructor(
    private postsService: PostsService,
    private route: ActivatedRoute,
    private location: Location,
    private auth: AuthService,
    private usersService: UsersService
  ) { }

  ngOnInit(): void {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.postsService.getPostById(params.get('id')))
      .subscribe(post => {
        this.post = post;
        this.self = this.auth.self(this.post.author.userId);
      });
  }

  onEdit() {
    alert('NOT READY!');
  }
  onDelete() {
    this.postsService.deletePostById(this.post._id, this.post.author.userId);
  }
}
