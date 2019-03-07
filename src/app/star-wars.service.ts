export class StarWarsService {
  private characters = [
    { name: 'Luke Skywalker', side: ''},
    { name: 'Darth Vader', side: ''},
    { name: 'Obi Wan Kenobi', side: ''}
  ];

  getCharacters(chosenList) {
    if(chosenList === 'all') {
      return this.characters.slice();
    }
    return this.characters.filter( char => char.side === chosenList);
  }

  onSideChosen(charInfo: { name: string; side: string }) {
    const pos = this.characters.findIndex( char => char.name === charInfo.name);
    this.characters[pos].side = charInfo.side;
  }
}
