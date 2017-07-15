import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Router } from '@angular/router';
import { Post } from '../models/post';
import { UsersService } from './users.service';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

// @TODO refactor for production
const API_URL = 'http://localhost:8080/api';

@Injectable()
export class PostsService {

  constructor(
    private http: Http,
    private usersService: UsersService,
    private router: Router
  ) { }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  getPosts(): Promise<Post[]> {
    return this.http.get(API_URL + '/posts')
      .toPromise()
      .then(response => response.json() as Post[])
      .catch(this.handleError);
  }
  // @TODO Add format guards
  getPostById(id: string): Promise<Post> {
    return this.http.get(`${API_URL}/posts/${id}`)
      .toPromise()
      .then(response => response.json() as Post)
      .catch(this.handleError);
  }
  deletePostById(id: string, authorId:string) {
    const currentUserId = this.usersService.getCurrentUserId();
    const headers = new Headers({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.usersService.getTokenId()
    });
    const options = new RequestOptions({ headers: headers });
    if (currentUserId === authorId) {
      return this.http.delete(`${API_URL}/posts/${id}`, options)
        .toPromise()
        .then(response => {
          this.router.navigate(['/']);
        })
        .catch(this.handleError);
    }
  }

  createPost(body): Promise<Post> {
    const _bodyJSON = JSON.stringify(body);
    const headers = new Headers({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.usersService.getTokenId()
    });
    const options = new RequestOptions({ headers: headers });

    if (this.usersService.authenticated()) {

      return this.http.post(`${API_URL}/posts/`, _bodyJSON, options)
        .toPromise()
        .then(response => response.json() as Post)
        .catch(this.handleError);
    } else {
      console.log('Boo! You are not logged in.');
    }
  }
}
