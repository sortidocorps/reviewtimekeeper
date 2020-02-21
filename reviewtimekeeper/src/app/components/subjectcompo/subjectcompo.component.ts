import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subjectcompo',
  templateUrl: './subjectcompo.component.html',
  styleUrls: ['./subjectcompo.component.scss']
})
export class SubjectcompoComponent implements OnInit {

  public title:string = "";
  public who:string = "";
  public order:number = 0;
  public timer:number = 0;

  timeLeft: number = 60;
  interval;

  constructor() {
   }

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
