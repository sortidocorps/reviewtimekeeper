import { Component, OnInit } from '@angular/core';
import { Timer } from 'src/app/shared/timer';
import { TimerState } from 'src/app/shared/timerState';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {

  private _btnPlay: string = 'Start Review';
  private _timer: Timer = new Timer();
  private _state: TimerState = new TimerState();



  constructor() { }

  ngOnInit(): void {
  }

  play() {
    this._timer.start();
    this._state.setPlay();
    this._btnPlay = 'Continue';
  }
  
  stop() {
    this._timer.stop();
    this._state.setStop();
  }

  backward() {
    this._timer.reset();
    this._state.setBackward();
    this._btnPlay = 'Start Review';
  }

}
