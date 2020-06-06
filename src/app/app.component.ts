import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  name: string = 'Mark';
  age: number = 23;

  constructor() {
    this.name = 'Mario';
    this.changeAge(this.age);
  }

  changeAge(age: number): void {
    this.age = age * 2;
  }
}
