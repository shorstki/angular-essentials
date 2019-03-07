import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input() character;
  @Output() sideAssigned = new EventEmitter<{name: string, side: string}>();

  constructor() { }

  ngOnInit() {
  }

  setCharSide(side: string) {
    this.sideAssigned.emit({name: this.character.name, side: side});
  }
}
