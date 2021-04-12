import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {User} from "../../users/user";
import {AuthService} from "../auth.service";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-signin-view',
  templateUrl: './signin-view.component.html',
  styleUrls: ['./signin-view.component.css']
})
export class SigninViewComponent implements OnInit {

  @Input() user: any;
  @Input() signInError: string;

  @Output('login') tryLoginEmitter = new EventEmitter();

  constructor(private authService: AuthService) {
    this.user = {}
  }

  ngOnInit() {
  }

  tryLogin(){
    this.tryLoginEmitter.emit(this.user);
  }
}
