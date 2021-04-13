import {Component, EventEmitter, OnDestroy, Output} from '@angular/core';

import {AuthService} from '../auth/auth.service';
import {User} from '../users/user';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnDestroy{

  user: User;

  @Output() featureSelected = new EventEmitter();

  constructor(private authService: AuthService,
              private router: Router) {
    this.user = authService.currentUser();
  }

  ngOnDestroy(): void {
    this.user = null;
  }

  onLogout(): void {
    this.authService.logOut();
    this.router.navigate(['/signin']);
  }
}
