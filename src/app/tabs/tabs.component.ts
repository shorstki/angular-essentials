import { Component, OnInit } from '@angular/core';
import {StarWarsService} from '../star-wars.service';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {

  characters = [];
  chosenList = 'all';
  swService: StarWarsService;

  constructor(swService: StarWarsService) {
    this.swService = swService;
  }

  ngOnInit() {
  }

  onChoose(side: string) {
    this.chosenList = side;
  }

  getCharacters() {
    return this.characters = this.swService.getCharacters(this.chosenList);
  }
}
