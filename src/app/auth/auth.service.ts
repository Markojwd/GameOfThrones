import {Router} from '@angular/router';
import {Injectable} from '@angular/core';
import {User} from '../users/user';
import {Observable, of} from 'rxjs';

@Injectable()
export class AuthService {
  token: string;
  users: User[];

  constructor(private router: Router) {
    this.users = [
      {username: 'admin', password: 'admin', email: 'admin@admin.com'},
      {username: 'guest', password: 'guest', email: 'guest@guest.com'}
    ];
  }

  isAuthenticated(): boolean {
    return JSON.parse(localStorage.getItem('currentUser'));
  }

  onSignin(username, password): Observable<User> {
    const userAccepted = this.users
      .filter(aUser => aUser.username === username)
      .filter(aUser => aUser.password === password);
    if (userAccepted && userAccepted.length === 1) {
      localStorage.setItem('currentUser', JSON.stringify({token: '', username: userAccepted[0].username}));
      return of(userAccepted[0]);
    } else {
      return of(null);
    }
  }

  currentUser(): User{
    return JSON.parse(localStorage.getItem('currentUser'));
  }

  logOut(): void{
    return localStorage.removeItem('currentUser');
  }
}
