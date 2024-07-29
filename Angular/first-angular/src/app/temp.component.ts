import { Component } from '@angular/core';

@Component({
  selector: 'firstTemp',
  template:
    `<h2>{{"Title: " + getTitle()}}</h2> <ul><li *ngFor="let color of colors><li/> <ul/>"
})
export class tempComponent {
  title = 'My first Temp';
  getTitle() {
    return this.title;
  }
  colors = ['blue', 'red', 'black'];
}
