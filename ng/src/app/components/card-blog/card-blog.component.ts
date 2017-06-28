import { Component, OnInit, Input } from '@angular/core';

import { Post } from '../../models/post';

@Component({
  selector: 'app-card-blog',
  templateUrl: './card-blog.component.html',
  styleUrls: ['./card-blog.component.css']
})
export class CardBlogComponent implements OnInit {
  @Input() post: Post;
  constructor() { }

  ngOnInit() {
  }

}
