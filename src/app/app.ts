import { Component } from '@angular/core';
import { Child } from './child';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Child],
  template: `
    <app-child (addItemEvent)="addItem($event)" />
    <p>🐢 all the way down {{ items.length }}</p>
    <ul>
      <li *ngFor="let item of items">{{ item }}</li>
    </ul>
  `,
})
export class App {
  items: string[] = [];

  addItem(item: string) {
    this.items.push(item);
  }
}