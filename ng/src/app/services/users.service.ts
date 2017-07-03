import { Injectable } from '@angular/core';
import { User } from '../models/user';

import { USERS } from './mock-users';


@Injectable()
export class UsersService {

  constructor() { }
  getUsers(): Promise<User[]> {
    return Promise.resolve(USERS);
  }

  getUserById(id: string): Promise<User> {
    return this.getUsers()
      .then(users => users.find(user => user._id === id));
  }
}
