import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { Location } from '@angular/common';

import { GotService } from '../got.service';


@Component({
  selector: 'app-house',
  templateUrl: './house.component.html',
  styleUrls: ['./house.component.css']
})
export class HouseComponent implements OnInit, OnDestroy {

  house: any = [];
  isLoaded = false;
  private houseSubscription: Subscription;


  constructor(private gotService: GotService, private route: ActivatedRoute, private location: Location) { }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.isLoaded = true;
    this.houseSubscription = this.route.params.subscribe((param: Params) => {
      this.gotService.loadHouse(+param['id']).subscribe((next) => {
        this.house = next;
        this.isLoaded = false;
      }, (error) => {
        this.isLoaded = false;
      });
    });
  }

  // tslint:disable-next-line:typedef
  goBack() {
    this.location.back();
  }

  // tslint:disable-next-line:typedef
  ngOnDestroy() {
    if (this.houseSubscription){
      this.houseSubscription.unsubscribe();
    }
  }
}
