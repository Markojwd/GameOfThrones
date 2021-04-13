import {RouterModule} from '@angular/router';
import {BookComponent} from './home/book/book.component';
import {CharacterComponent} from './home/character/character.component';
import {NgModule} from '@angular/core';
import {SortPipe} from './home/sort.pipe';
import {FilterPipe} from './home/filter.pipe';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {HouseComponent} from './home/house/house.component';
import {HomeComponent} from './home/home.component';


@NgModule({
  declarations: [
    HomeComponent,
    BookComponent,
    CharacterComponent,
    HouseComponent,
    SortPipe,
    FilterPipe
  ],
  imports: [CommonModule, FormsModule, RouterModule],
  exports: [RouterModule]
})
export class CoreModule {}
