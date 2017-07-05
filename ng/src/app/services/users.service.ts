import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { USERS } from './mock-users';
import { User } from '../models/user';
import { AuthService } from './auth.service';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

// @TODO refactor for production
const API_URL = 'http://localhost:8080/api';

@Injectable()
export class UsersService {

  constructor(
    private http: Http,
    private authService: AuthService
  ) { }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  getUsers(): Promise<User[]> {
    return Promise.resolve(USERS);
  }

  getUserById(id: string): Promise<User> {
    return this.http.get(`${API_URL}/users/${id}`)
      .toPromise()
      .then(response => response.json() as User)
      .catch(this.handleError)
  }
}
