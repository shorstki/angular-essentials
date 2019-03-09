import {LogService} from './log.service';
import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {HttpClient} from '@angular/common/http';

export interface CharactersResponse {
  count: number;
  results: Array<object>;
}

@Injectable()
export class StarWarsService {
  private characters = [
    { name: 'Luke Skywalker', side: ''},
    { name: 'Darth Vader', side: ''},
    { name: 'Obi Wan Kenobi', side: ''}
  ];
  private logService: LogService;
  characterChanged = new Subject<void>();
  http: HttpClient;

  constructor(logService: LogService, http: HttpClient) {
    this.logService = logService;
    this.http = http;
  }

  fetchCharacters() {
    return this.http.get('https://swapi.co/api/people/').subscribe( (response: CharactersResponse) => {
      this.characters =  response.results.map( (char: {name: string}) => ({name: char.name, side: ''}) );
      this.characterChanged.next();
    });
  }

  getCharacters(chosenList) {
    if (chosenList === 'all') {
      return this.characters.slice();
    }
    return this.characters.filter( char => char.side === chosenList);
  }

  onSideChosen(charInfo: { name: string; side: string }) {
    const pos = this.characters.findIndex( char => char.name === charInfo.name);
    this.characters[pos].side = charInfo.side;
    this.characterChanged.next();
    this.logService.writeLog('Changed side of ' + charInfo.name + ' to ' + charInfo.side);
  }

  addCharacter(name, side) {

    if (name === '' || (this.characters.findIndex( char => char.name === name)) !== -1) {
      return;
    }

    this.characters.push({name, side});
  }
}
