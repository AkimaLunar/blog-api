import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { POSTS } from './mock-posts';
import { Post } from '../models/post';
import { AuthService } from './auth.service';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

const POST_API_URL = 'http://localhost:8080';

@Injectable()
export class PostsService {

  constructor(
    private http: Http,
    private authService: AuthService) { }
  getPosts(): Promise<Post[]> {
    return Promise.resolve(POSTS);
  }

  getPostById(id: any): Promise<Post> {
    return this.getPosts()
      .then(posts => posts.find(post => post._id === id));
  }

  createPost(body): Observable<Post> {
    if (this.authService.authenticated()) {
      const headers = new Headers({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.authService.getTokenId()
      });
      const options = new RequestOptions({ headers: headers });
      return this.http.post(POST_API_URL, body, options)
        .map((response: Response) => response.json());
    } else {
      console.log('Boo! You are not logged in.');
    }
  }
}
