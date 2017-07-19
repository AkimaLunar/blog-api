import { Component, OnInit } from '@angular/core';
import { User } from './models/user';
import { UsersService } from './services/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  currentUser: User;
  constructor(
    public usersService: UsersService
  ) {}

  ngOnInit() {
    if (this.usersService.authenticated()) {
      this.usersService.getUserById(this.usersService.getCurrentUserId())
        .then(user => {
          this.currentUser = user;
          this.usersService.setCurrentUser(this.currentUser);
        });
    }
  }
}
