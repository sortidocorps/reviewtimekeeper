import { Component, OnInit } from '@angular/core';
import { Timer } from 'src/app/shared/timer';
import { TimerState } from 'src/app/shared/timerState';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {

  btnPlay: string = 'Start Review';
  timer: Timer = new Timer();
  state: TimerState = new TimerState();



  constructor() { }

  ngOnInit(): void {
  }

  play() {
    this.timer.start();
    this.state.setPlay();
    this.btnPlay = 'Continue';
  }
  
  stop() {
    this.timer.stop();
    this.state.setStop();
  }

  backward() {
    this.timer.reset();
    this.state.setBackward();
    this.btnPlay = 'Start Review';
  }

}
