import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Assignment';
  evens: number[] = []
  odds: number[] = []

  getGameEvent(myNum: number) {
    if(myNum % 2 == 0) {
      this.evens.push(myNum)
    } else {
      this.odds.push(myNum)
    }
  }
}
