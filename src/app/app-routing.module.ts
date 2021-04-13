import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SigninComponent} from './auth/signin/signin.component';
import {AuthGuard} from './auth/auth-guard.service';
import {HomeComponent} from './core/home/home.component';
import {BookComponent} from './core/home/book/book.component';
import {CharacterComponent} from './core/home/character/character.component';
import {HouseComponent} from './core/home/house/house.component';

const appRoutes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
  {path: 'book/:id', component: BookComponent, canActivate: [AuthGuard]},
  {path: 'character/:id', component: CharacterComponent, canActivate: [AuthGuard]},
  {path: 'house/:id', component: HouseComponent, canActivate: [AuthGuard]},
  {path: 'signin', component: SigninComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {useHash: true}),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
