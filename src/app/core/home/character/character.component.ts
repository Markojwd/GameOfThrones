import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { Location } from '@angular/common';

import { GotService } from '../got.service';


@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit, OnDestroy {

  character: any = [];
  isLoaded = false;
  private characterSubscription: Subscription;


  constructor(private gotService: GotService, private route: ActivatedRoute, private location: Location) { }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.isLoaded = true;
    this.characterSubscription = this.route.params.subscribe((param: Params) => {
      this.gotService.loadCharacter(+param['id']).subscribe((next) => {
        this.character = next;
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
    if (this.characterSubscription){
      this.characterSubscription.unsubscribe();
    }
  }

}
