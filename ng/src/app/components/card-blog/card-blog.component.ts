import { Component, OnChanges, SimpleChanges, Input, ComponentRef } from '@angular/core';

import { Post } from '../../models/post';

export interface PostComponent {
  post: Post;
}

@Component({
  selector: 'app-card-blog',
  templateUrl: './card-blog.component.html',
  styleUrls: ['./card-blog.component.css']
})
export class CardBlogComponent implements PostComponent, OnChanges {
  component: ComponentRef<PostComponent>;
  @Input() post: Post;
  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
     if (!this.component) {
      return;
    }
    this.component.instance.post = this.post;
  }
}
