import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {StarWarsService} from '../star-wars.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  characters = [];
  activeRoute: ActivatedRoute;
  swService: StarWarsService;

  constructor(activatedRoute: ActivatedRoute, swSerwice: StarWarsService) {
    this.activeRoute = activatedRoute;
    this.swService = swSerwice;
  }

  ngOnInit() {
    this.activeRoute.params.subscribe(params => {
      this.characters = this.swService.getCharacters(params.side);
    });
  }
}
