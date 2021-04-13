import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { GotService } from './got.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  filteredData: any = [];
  allData: any = [];
  view = '';
  search = '';
  bookSubscription: Subscription;
  characterSubscription: Subscription;
  houseSubscription: Subscription;
  isLoadedFlg = false;
  categories: string[] = ['books', 'characters', 'houses'];

  constructor(private gotService: GotService) { }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.getBooks();
    this.getCharacters();
    this.getHouses();
  }

  // tslint:disable-next-line:typedef
  getBooks() {
    this.isLoadedFlg = false;
    this.bookSubscription = this.gotService.loadAllBooks().subscribe((data) => {
      this.allData = this.allData.concat(data);
      this.filteredData = this.allData;
      this.isLoadedFlg = true;
    }, (error) => {
      this.isLoadedFlg = true;
    });
  }

  // tslint:disable-next-line:typedef
  getCharacters() {
    this.isLoadedFlg = false;
    this.characterSubscription = this.gotService.loadAllCharacters().subscribe((data) => {
      this.allData = this.allData.concat(data);
      this.filteredData = this.allData;
      this.isLoadedFlg = true;
    }, (error) => {
      this.isLoadedFlg = true;
    });
  }

  // tslint:disable-next-line:typedef
  getHouses() {
    this.isLoadedFlg = false;
    this.houseSubscription = this.gotService.loadAllHouses().subscribe((data) => {
      this.allData = this.allData.concat(data);
      this.filteredData = this.allData;
      this.isLoadedFlg = true;
    }, (error) => {
      this.isLoadedFlg = true;
    });
  }

  // tslint:disable-next-line:typedef
  ngOnDestroy() {
    if (this.bookSubscription){
      this.bookSubscription.unsubscribe();
    }
    if (this.houseSubscription){
      this.houseSubscription.unsubscribe();
    }
    if (this.characterSubscription){
      this.characterSubscription.unsubscribe();
    }
  }

  // tslint:disable-next-line:typedef
  filterData(aFilterStringValue: string) {
    this.filteredData = this.allData.filter(data => {
      return data.name.toLowerCase().includes(aFilterStringValue);
    });
  }

  // tslint:disable-next-line:typedef
  filterData2(aFilterStringValue: any) {
    if (aFilterStringValue === 'books') {
      this.filteredData = this.filteredData.filter(it => {
        if (it.hasOwnProperty('isbn')) {
          return it;
        }
      });
    } else if (aFilterStringValue === 'characters') {
      this.filteredData = this.filteredData.filter(it => {
        if (it.hasOwnProperty('gender')) {
          return it;
        }
      });
    } else if (aFilterStringValue === 'houses') {
      this.filteredData = this.filteredData.filter(it => {
        if (it.hasOwnProperty('region')) {
          return it;
        }
      });
    }
  }

  changeView(event): void {
    const selectValue = event.target.value;
    if (!selectValue || selectValue === 'all') {
      this.filteredData = this.allData;
    } else if (selectValue === 'books') {
      this.filteredData = this.allData.filter(it => {
        if (it.hasOwnProperty('mediaType')) {
          return it;
        }
      });
    } else if (selectValue === 'characters') {
      this.filteredData = this.allData.filter(it => {
        if (it.hasOwnProperty('gender')) {
          return it;
        }
      });
    } else if (selectValue === 'houses'){
      this.filteredData = this.allData.filter(it => {
        if (it.hasOwnProperty('region')) {
          return it;
        }
      });
    }
  }
}
