import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
  providers: [AuthService]
})
export class NavigationComponent implements OnInit {

  loggedInSubscription: Subscription;
  loggedIn: Boolean;
  profile;
  constructor(private auth: AuthService) {}

  ngOnInit() {
    this.loggedInSubscription = this.auth.loggedIn$.subscribe(loggedIn => { this.loggedIn = loggedIn; });
    this.profile = this.setProfile();
  }

  setProfile() {
    const _profile = localStorage.getItem('profile');
    return _profile;
  }
  login() {
    this.auth.login();
  }
  logout() {
    this.auth.logout();
  }



}
