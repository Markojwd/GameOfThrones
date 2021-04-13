import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';
import {CoreModule} from './core/core.module';
import {AuthService} from './auth/auth.service';
import {AuthGuard} from './auth/auth-guard.service';
import {GotService} from './core/home/got.service';
import {SigninViewComponent} from './auth/signin/signin-view.component';
import {SigninComponent} from './auth/signin/signin.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {HeaderComponent} from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    SigninViewComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    CoreModule
  ],
  providers: [AuthService, AuthGuard, GotService, HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
