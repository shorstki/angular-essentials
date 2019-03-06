import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-user',
  template: `
    <!--<input type="text" [(ngModel)]="name" >-->
    <input type="text" [value]="name" (input)="onUserInput($event)">
    <p>Hello {{ name }}!</p>
    <p>I'm the user component</p>
    <app-user-detail></app-user-detail>
  `
})
export class UserComponent {

  @Input() name = 'test';
  @Output() nameChanged = new EventEmitter<string>();

  onUserInput(event) {
    // this.name = event.target.value;
    this.nameChanged.emit(event.target.value);
  }
}
