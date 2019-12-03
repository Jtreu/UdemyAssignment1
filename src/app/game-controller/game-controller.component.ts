import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { maybeQueueResolutionOfComponentResources } from '@angular/core/src/metadata/resource_loading';

@Component({
  selector: 'app-game-controller',
  templateUrl: './game-controller.component.html',
  styleUrls: ['./game-controller.component.css']
})
export class GameControllerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  // Properties
  @Output() gameEvent = new EventEmitter<number>()
  ref
  myNum: number = 0;

  start() {
    this.ref = setInterval(() => this.increment(), 1000)
  }

  stop() {
    clearInterval(this.ref)
  }

  increment() {
    this.myNum++
    this.gameEvent.emit(this.myNum)
  }

}
