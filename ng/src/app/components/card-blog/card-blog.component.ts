import { Component, OnInit, OnChanges, SimpleChanges, Input, ComponentRef } from '@angular/core';

import { Post } from '../../models/post';

export interface PostComponent {
  post: Post;
}

@Component({
  selector: 'app-card-blog',
  templateUrl: './card-blog.component.html',
  styleUrls: ['./card-blog.component.css']
})
export class CardBlogComponent implements OnInit, PostComponent, OnChanges {
  component: ComponentRef<PostComponent>;
  @Input() post: Post;
  displayTitle: string;
  constructor() { }

  ngOnInit() {
    if (this.post.title.length > 40) {
      this.displayTitle = this.post.title.slice(0, 40).concat('…');
    } else {
      this.displayTitle = this.post.title;
    }
  }
  ngOnChanges(changes: SimpleChanges) {
     if (!this.component) {
      return;
    }
    this.component.instance.post = this.post;
  }
}
