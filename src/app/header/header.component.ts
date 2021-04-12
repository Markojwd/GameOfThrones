import {Component} from '@angular/core';

import {AuthService} from '../auth/auth.service';
import {User} from '../users/user';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {

  user: User;

  constructor(private authService: AuthService,
              private router: Router) {
    this.user = authService.currentUser();
  }

  onLogout(): void {
    localStorage.removeItem('currentUser');
    this.router.navigate(['/signin']);
    // this.authService.logOut();
  }
}
