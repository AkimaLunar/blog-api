import { Injectable } from '@angular/core';
import { Post } from '../models/post';

import { POSTS } from './mock-posts';


@Injectable()
export class PostsService {

  constructor() { }
  getPosts(): Promise<Post[]> {
    return Promise.resolve(POSTS);
  }

  getPostById(id: any): Promise<Post> {
    return this.getPosts()
      .then(posts => posts.find(post => post._id === id));
  }
}
