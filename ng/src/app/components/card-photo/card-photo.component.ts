import { Component, OnChanges, SimpleChanges, Input, ComponentRef } from '@angular/core';

import { Post } from '../../models/post';

export interface PostComponent {
  post: Post;
}

@Component({
  selector: 'app-card-photo',
  templateUrl: './card-photo.component.html',
  styleUrls: ['./card-photo.component.css']
})
export class CardPhotoComponent implements PostComponent, OnChanges {
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
