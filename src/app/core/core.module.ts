import {RouterModule, Routes} from '@angular/router';
import {BookComponent} from './home/book/book.component';
import {CharacterComponent} from './home/character/character.component';
import {NgModule} from '@angular/core';
import {SortPipe} from './home/sort.pipe';
import {FilterPipe} from './home/filter.pipe';
import {SelectPipe} from './home/select.pipe';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {HouseComponent} from './home/house/house.component';
import {HomeComponent} from './home/home.component';


const appRoute: Routes = [
  { path: 'blogs', component: HomeComponent },
  { path: 'book/:id', component: BookComponent },
  { path: 'character/:id', component: CharacterComponent },
  { path: 'house/:id', component: HouseComponent },
  { path: '**', redirectTo: '/not' }
];

@NgModule({
  declarations: [
    HomeComponent,
    BookComponent,
    CharacterComponent,
    HouseComponent,
    SortPipe,
    FilterPipe,
    SelectPipe
  ],
  imports: [CommonModule, FormsModule, RouterModule.forRoot(appRoute)],
  exports: [RouterModule]
})
export class CoreModule {}
