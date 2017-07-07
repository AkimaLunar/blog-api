// services/auth.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { tokenNotExpired } from 'angular2-jwt';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

declare var Auth0Lock: any;

@Injectable()
export class AuthService {
  // Need to fix dotenv
  // lock = new Auth0Lock('YOUR_AUTH0_CLIENT_ID', 'YOUR_AUTH0_DOMAIN');
  lock = new Auth0Lock('r0U8PcRtw9LMakkw0MV9mjnHYb7gk7e3', 'riacarmin.auth0.com');
  loggedIn: boolean;
  loggedIn$ = new BehaviorSubject<boolean>(this.authenticated());

  constructor(public router: Router) {
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

      });
    });
  }

  setLoggedIn(value: boolean): void {
    this.loggedIn$.next(value);
    this.loggedIn = value;
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

  authenticated(): boolean {
    return tokenNotExpired('idToken');
  }

  getCurrentUser(): string {
    if (this.authenticated()) {
      const _profile = JSON.parse(localStorage.getItem('profile'));
      return _profile.identities[0].user_id;
    }
  }

  getTokenId(): string {
    return localStorage.getItem('idToken');
  }
}
