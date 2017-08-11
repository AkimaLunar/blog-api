import { Component, OnInit } from '@angular/core';

import { Post } from '../../models/post';
import { PostsService } from '../../services/posts.service';
@Component({
  selector: 'app-view-search',
  templateUrl: './view-search.component.html',
  styleUrls: ['./view-search.component.css']
})
export class ViewSearchComponent implements OnInit {
  posts: Post[];
  searchResults: string;
  constructor(
    public postsService: PostsService,
) { }

  ngOnInit() {
    this.postsService.searchPosts$.subscribe(posts => {
      this.posts = posts
      this.searchResults = `Found ${this.posts.length} posts.`
    })
  }

}
