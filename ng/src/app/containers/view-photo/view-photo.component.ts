import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';

import { Post } from '../../models/post';
import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'app-view-photo',
  templateUrl: './view-photo.component.html',
  styleUrls: ['./view-photo.component.css'],
  providers: [PostsService]
})
export class ViewPhotoComponent implements OnInit {
  post: Post;
  contentChecked: Boolean;
  constructor(
    private postsService: PostsService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.postsService.getPostById(params.get('id')))
      .subscribe(post => this.post = post);
  }

}
