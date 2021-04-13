import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-signin-view',
  templateUrl: './signin-view.component.html',
  styleUrls: ['./signin-view.component.css']
})
export class SigninViewComponent implements OnInit {

  @Input() user: any;
  @Input() signInError: string;

  @Output() login = new EventEmitter();

  constructor(private authService: AuthService) {
    this.user = {};
  }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  tryLogin(){
    this.login.emit(this.user);
  }
}
