import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-cart-component',
  templateUrl: './cart-component.component.html',
  styleUrls: ['./cart-component.component.css']
})
export class CartComponentComponent implements OnInit {

  @Input() items: Array<string>;
  @Output() addedItem = new EventEmitter<string>();
  newItem: string;

  constructor() { }

  ngOnInit() {
  }

  addNewItem() {
    this.addedItem.emit(this.newItem);
    this.newItem = '';
  }
}
