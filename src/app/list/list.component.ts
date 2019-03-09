import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {StarWarsService} from '../star-wars.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit, OnDestroy {

  characters = [];
  activeRoute: ActivatedRoute;
  swService: StarWarsService;
  activeTab = 'all';
  subscription: Subscription;

  constructor(activatedRoute: ActivatedRoute, swSerwice: StarWarsService) {
    this.activeRoute = activatedRoute;
    this.swService = swSerwice;
  }

  ngOnInit() {
    this.activeRoute.params.subscribe(params => {
      this.activeTab = params.side;
      this.characters = this.swService.getCharacters(this.activeTab);
    });
    this.subscription = this.swService.characterChanged.subscribe(() => {
      this.characters = this.swService.getCharacters(this.activeTab);
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
