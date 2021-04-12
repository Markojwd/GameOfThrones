import {Component, OnDestroy, OnInit} from '@angular/core';

import {AuthService} from '../auth.service';
import {Router} from '@angular/router';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit, OnDestroy {

  loginError: string;
  request: Subscription;


  constructor(private router: Router,
              private authService: AuthService) {
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    if (this.request){
      this.request.unsubscribe();
    }
  }

  onSignin(user): void {
    if (this.request){
      this.request.unsubscribe();
    }
    this.request = this.authService.onSignin(user.username, user.password).subscribe((loggedUser) => {
      if (loggedUser) {
        this.router.navigate(['/']).then(() => {
        });
        this.loginError = null;
      } else {
        this.loginError = 'username and password are wrong';
      }
    }, (error) => {
      console.log('error while logging');
    }, () => {
      console.log('error while logging');
    });
  }

}
