import { Injectable } from '@angular/core';
import { User } from './user';

import { USERS } from './mock-users';


@Injectable()
export class UsersService {

  constructor() { }
  getUsers(): Promise<User[]> {
    return Promise.resolve(USERS);
  }

  getUser(id: string): Promise<User> {
    return this.getUsers()
      .then(users => users.find(user => user._id.$oid === id));
  }
}
