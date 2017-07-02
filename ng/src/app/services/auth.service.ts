// services/auth.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { tokenNotExpired } from 'angular2-jwt';
import { Router } from '@angular/router';

// We want to avoid any 'name not found'
// warnings from TypeScript
declare var Auth0Lock: any;

@Injectable()
export class AuthService {
  // Need to fix dotenv
  // lock = new Auth0Lock('YOUR_AUTH0_CLIENT_ID', 'YOUR_AUTH0_DOMAIN');
  lock = new Auth0Lock('r0U8PcRtw9LMakkw0MV9mjnHYb7gk7e3', 'riacarmin.auth0.com');
  loggedIn: boolean;
  loggedIn$ = new BehaviorSubject<boolean>(this.loggedIn);

  constructor(public router: Router) {
    if (this.authenticated) {
      this.setLoggedIn(true);
    }
    this.lock.on('authenticated', (authResult) => {

      this.lock.getUserInfo(authResult.accessToken, (error, profile) => {
        if (error) {
          console.log(error);
          this.router.navigate(['/']);
          return;
        }
        console.log(profile);
        localStorage.setItem('idToken', authResult.idToken);
        localStorage.setItem('accessToken', authResult.accessToken);
        localStorage.setItem('profile', JSON.stringify(profile));
        this.setLoggedIn(true);

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
    this.setLoggedIn(false);
 }

  authenticated(): boolean {
    // Check if there's an unexpired access token
    return tokenNotExpired('idToken');
  }
}