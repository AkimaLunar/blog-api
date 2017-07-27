import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Router } from '@angular/router';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { tokenNotExpired } from 'angular2-jwt';
import { User } from '../models/user';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

declare var Auth0Lock: any;

// @TODO refactor for production
const API_URL = 'https://protected-tor-84468.herokuapp.com/api';
const lockOptions = {
  theme: {
    logo: 'https://protected-tor-84468.herokuapp.com/assets/Logo-Auth0-Lock.png',
    primaryColor: '#88b2cc',
  },
  languageDictionary: {
    title: "Meenk me in!"
  }
}

@Injectable()
export class UsersService {

  lock = new Auth0Lock('r0U8PcRtw9LMakkw0MV9mjnHYb7gk7e3', 'riacarmin.auth0.com', lockOptions);
  loggedIn: boolean;
  loggedIn$ = new BehaviorSubject<boolean>(this.authenticated());
  currentUser: User;
  currentUser$ = new Subject<User>();
  // self$ = new BehaviorSubject<boolean>(false);

  constructor(
    private http: Http,
    private router: Router
  ) {
    this.setLoggedIn(this.authenticated());
    this.lock.on('authenticated', (authResult) => {

      this.lock.getUserInfo(authResult.accessToken, (error, profile) => {
        if (error) {
          console.log(error);
          this.router.navigate(['/']);
          return;
        }
        localStorage.setItem('idToken', authResult.idToken);
        localStorage.setItem('accessToken', authResult.accessToken);
        localStorage.setItem('profile', JSON.stringify(profile));
        this.setLoggedIn(this.authenticated());
        this.createUser(profile);
      });
    });
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  private setLoggedIn(value: boolean): void {
    this.loggedIn$.next(value);
    this.loggedIn = value;
  }

  setCurrentUser(user: User): void {
    this.currentUser$.next(user);
    this.currentUser = user;
  }

  getCurrentUserId(): string {
    if (this.authenticated()) {
      const _profile = JSON.parse(localStorage.getItem('profile'));
      return _profile.identities[0].user_id;
    }
  }

  self(userId: string) {
    const _currentUser = this.getCurrentUserId();
    return _currentUser === userId;
  }

  // setSelf(userId: string) {
  //   currentUser$ last value === getTokenID?
  // }

  authenticated(): boolean {
    return tokenNotExpired('idToken');
  }

  login(): void {
    this.lock.show((error: string, profile: Object, id_token: string) => {
      if (error) {
        console.log(error);
      }
    });
 }

  logout(): void {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('idToken');
    localStorage.removeItem('profile');
    this.router.navigate(['/']);
    this.setLoggedIn(this.authenticated());
 }

  getTokenId(): string {
    return localStorage.getItem('idToken');
  }

  getUserById(id: string): Promise<User> {
    return this.http.get(`${API_URL}/users/${id}`)
      .toPromise()
      .then(response => response.json() as User)
      .catch(this.handleError);
  }

  createUser(auth0Profile): Promise<void> {
    const _body = {
      auth0_id: auth0Profile.identities[0].user_id,
      email: auth0Profile.email,
      name : {
        firstName: auth0Profile.nickname
      },
      picture: auth0Profile.picture
    };
    const _bodyJSON = JSON.stringify(_body);
    const headers = new Headers({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.getTokenId()
    });
    const options = new RequestOptions({ headers: headers });

    if (this.authenticated()) {

      return this.http.post(`${API_URL}/users/`, _bodyJSON, options)
        .toPromise()
        .then(response => this.setCurrentUser(response.json() as User))
        .catch(this.handleError);
    } else {
      console.log('Boo! You are not logged in.');
    }
  }

  updateUser(user: User): Promise<void> {
    const _id = this.getCurrentUserId();
    const _bodyJSON = JSON.stringify(user);
    const headers = new Headers({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.getTokenId()
    });
    const options = new RequestOptions({ headers: headers });

    if (this.authenticated()) {

      return this.http.put(`${API_URL}/users/${_id}`, _bodyJSON, options)
        .toPromise()
        .then(response => this.setCurrentUser(response.json() as User))
        .catch(this.handleError);
    } else {
      console.log('Boo! You are not logged in.');
    }
  }
}
