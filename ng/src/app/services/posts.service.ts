import { Injectable } from '@angular/core';
import { Post } from './post';

import { POSTS } from './mock-posts';


@Injectable()
export class PostsService {

  constructor() { }
  getPosts(): Promise<Post[]> {
    return Promise.resolve(POSTS);
  }
}
