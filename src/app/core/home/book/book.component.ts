import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { GotService } from '../got.service';


@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit, OnDestroy {

  book: any = [];
  isLoaded = false;
  private bookSubscription: Subscription;


  constructor(private gotService: GotService, private route: ActivatedRoute, private location: Location) { }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.isLoaded = true;
    this.bookSubscription = this.route.params.subscribe((param: Params) => {
      this.gotService.loadBook(+param['id']).subscribe((data) => {
        this.book = data;
        this.isLoaded = false;
      }, (error) => {
        this.isLoaded = false;
      });
    });
  }

  goBack = () => {
    this.location.back();
  }

  // tslint:disable-next-line:typedef
  ngOnDestroy() {
    if (this.bookSubscription){
      this.bookSubscription.unsubscribe();
    }
  }

}
