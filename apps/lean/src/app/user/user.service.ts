import { Injectable } from '@angular/core';
import { User } from '@lean/api-interfaces';
import { Observable, of } from 'rxjs';
import { USERS } from './mock-users';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  getUser(id: string): Observable<User> {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return of(USERS.find(user => user._id === id)!);
  }

  addUser(user: User): Observable<User> {
    user._id = USERS.length + 1 + '';

    USERS.push(user);
    return of(user);
  }

  updateUser(user: User): Observable<User> {
    const index = USERS.findIndex(u => u._id === user._id);
    USERS[index] = user;
    return of(user);
  }

  deleteUser(user: User): Observable<User> {
    USERS.splice(USERS.findIndex(u => u._id === user._id), 1);
    return of(user);
  }
}
