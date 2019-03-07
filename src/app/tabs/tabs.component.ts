import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {

  characters = [
    { name: 'Luke Skywalker', side: ''},
    { name: 'Darth Vader', side: ''},
    { name: 'Obi Wan Kenobi', side: ''}
  ];
  chosenList = 'all';

  constructor() { }

  ngOnInit() {
  }

  getCharacters() {
    if(this.chosenList === 'all') {
      return this.characters.slice();
    }
    return this.characters.filter( char => char.side === this.chosenList);
  }

  onChoose(side: string) {
    this.chosenList = side;
  }

  onSideChosen(charInfo: { name: string; side: string }) {
    const pos = this.characters.findIndex( char => char.name === charInfo.name);
    this.characters[pos].side = charInfo.side;
  }
}
