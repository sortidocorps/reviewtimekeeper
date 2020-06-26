import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timertest',
  templateUrl: './timertest.component.html',
  styleUrls: ['./timertest.component.scss']
})
export class TimertestComponent implements OnInit {

  timeLeft: number = 60;
  interval;

  constructor() { }

  ngOnInit(): void {
  }

  startTimer() {
    this.interval = setInterval(() => {
      if(this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        this.timeLeft = 60;
      }
    },1000)
  }

  pauseTimer() {
    clearInterval(this.interval);
  }

}
