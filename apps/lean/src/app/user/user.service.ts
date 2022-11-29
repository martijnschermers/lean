import { Injectable } from '@angular/core';
import { UserInterface } from '@lean/api-interfaces';
import { Observable, of } from 'rxjs';
import { USERS } from './mock-users';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  getUser(id: string): Observable<UserInterface> {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return of(USERS.find(user => user._id === id)!);
  }

  addUser(user: UserInterface): Observable<UserInterface> {
    user._id = USERS.length + 1 + '';

    USERS.push(user);
    return of(user);
  }

  updateUser(user: UserInterface): Observable<UserInterface> {
    const index = USERS.findIndex(u => u._id === user._id);
    USERS[index] = user;
    return of(user);
  }

  deleteUser(user: UserInterface): Observable<UserInterface> {
    USERS.splice(USERS.findIndex(u => u._id === user._id), 1);
    return of(user);
  }
}
