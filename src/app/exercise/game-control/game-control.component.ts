import { Component, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  incrementingNumber: number = 0;
  timeIntervalReference;
  @Output() emitNumber = new EventEmitter<number>();
  constructor() { }

  ngOnInit(): void {
  }

  startGame(){
    this.timeIntervalReference = setInterval(() => {
      this.incrementingNumber = this.incrementingNumber + 1;
      this.emitNumber.emit(this.incrementingNumber);
      this
    }, 1000)
  }

  endGame(){
    clearInterval(this.timeIntervalReference);
  }

}
