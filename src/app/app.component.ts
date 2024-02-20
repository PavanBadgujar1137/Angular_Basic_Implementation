import { Component, input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'testApp';
  getName(name, roll) {
    alert(`${name} and ${roll}`);
  }
  displayVal = '';

  getvalue(val) {
    this.displayVal = val;
  }

  count = 0;
  counter(type) {
    type === 'add' ? this.count++ : this.count--;
  }

  count1 = 0;
  counter1(type1) {
    type1 === 'add1' ? this.count1++ : this.count1--;
  }

  name = 'peter';
  disable = true;

  show = 'yes';
  color = 'xyz';
}
