import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  template: `
    <button class="byn" (click)="add()">Add item</button>
  `,
})
export class Child {
  @Output() addItemEvent = new EventEmitter<string>();

  private counter = 1;

  add() {
    this.addItemEvent.emit(`item ${this.counter++}`);
  }
}