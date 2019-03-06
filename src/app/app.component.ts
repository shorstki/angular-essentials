import { Component } from '@angular/core';
import { random } from 'lodash';

// declare const _: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular-Essentials';
  name = 'Test';
  cartItems = ['Apples', 'Bananas', 'Cherries'];
  num = random(1, 10);

  onNameChanged(name: string) {
    this.name = name;
  }

  addItem(newItem: string) {
    this.cartItems.push(newItem);
    console.log(this.cartItems);
  }
}
