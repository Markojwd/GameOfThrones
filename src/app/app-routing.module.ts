import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {SignupComponent} from './auth/signup/signup.component';
import {SigninComponent} from './auth/signin/signin.component';
import {AuthGuard} from './auth/auth-guard.service';
import {HomeComponent} from './core/home/home.component';
import {BookComponent} from './core/home/book/book.component';
import {CharacterComponent} from './core/home/character/character.component';
import {HouseComponent} from './core/home/house/house.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/blogs', pathMatch: 'full' },
  { path: 'blogs', component: HomeComponent },
  { path: 'book/:id', component: BookComponent, canActivate: [AuthGuard] },
  { path: 'character/:id', component: CharacterComponent },
  { path: 'house/:id', component: HouseComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'signin', component: SigninComponent },
  { path: '**', redirectTo: '/not' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {useHash: true}),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
