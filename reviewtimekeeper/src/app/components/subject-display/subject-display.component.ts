import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SubjectcompoComponent } from '../subjectcompo/subjectcompo.component';
import { isGeneratedFile } from '@angular/compiler/src/aot/util';

@Component({
  selector: 'app-subject-display',
  templateUrl: './subject-display.component.html',
  styleUrls: ['./subject-display.component.scss']
})
export class SubjectDisplayComponent implements OnInit {

  time25: number;
  time5: number;
  minute25: number;
  minute5: number;
  second25: number;
  second5: number;
  interval;
  timeStarted: number;
  timeLeft: number;
  colorBg: string;
  isPaused: boolean;
  isReverseTimer:boolean;

  secondRest: number;
  minuteRest: number;

  constructor(public dialogRef: MatDialogRef<SubjectcompoComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {
    this.timeLeft = this.data.timeLeft;
    this.isPaused = false;
  }



  ngOnInit(): void {
    this.startTimer();
    this.colorBg = "good";
    this.isReverseTimer = false;

    this.timeStarted = this.timeLeft;

    let percent = 40;
    this.time25 = parseInt("" + Math.round(this.timeStarted * percent) / 100);
    this.minute25 = this.getMinutes(this.time25);
    this.second25 = this.getSecond(this.time25);

    percent = 25;
    this.time5 = parseInt("" + Math.round(this.timeStarted * percent) / 100);
    this.minute5 = this.getMinutes(this.time5);
    this.second5 = this.getSecond(this.time5);

    console.log("time25 ", this.time25);
    console.log("time5 ", this.time5);

    this.minuteRest = this.getMinutes(this.timeStarted);
    this.secondRest = this.getSecond(this.timeStarted);
    /* console.log("time minute ", this.minuteRest);
    console.log("time second ", this.secondRest);  */
  }

  startTimer() {
    this.isPaused = false;

    this.interval = setInterval(() => {
      if (this.secondRest > 0) {
        this.secondRest--;
      } else if (this.minuteRest > 0 && this.secondRest == 0) {
        this.minuteRest--;
        let secondTotal = this.getMinutes(this.minuteRest);
        secondTotal = + 59;
        this.secondRest = this.getSecond(secondTotal);
      } else {
        clearInterval(this.interval);
        //this.closerPopup();
        this.startReverseTimer();
      }
      this.lastButNotLeast();

    }, 1000)

  }

  startReverseTimer() {
    this.isReverseTimer = true;
    this.isPaused = false;
    this.colorBg = "endsubjectreview";
    this.interval = setInterval(() => {
      if (this.secondRest < 59) {
        this.secondRest++;
      } else if (this.minuteRest >= 0 && this.secondRest == 59) {
        this.minuteRest++;
        let secondTotal = this.getMinutes(this.minuteRest);
        secondTotal = 0;
        this.secondRest = this.getSecond(secondTotal);
      } else {
        clearInterval(this.interval);
      }

    }, 1000)

  }



  closerPopup() {

    // Close the popup 2 seconds after the end of the subject
    let timeToClosePopup = 10;
    let closePopupInterval = setInterval(() => {
      this.colorBg = "endsubjectreview";

      if (timeToClosePopup > 0) {
        timeToClosePopup--;
      } else {
        clearInterval(closePopupInterval);
        // The time is realy finish.
        this.dialogRef.close("ok");
      }

    }, 1000)


  }

  pauseTimer() {
    if (this.isPaused) {
      this.startTimer();
    } else {
      clearInterval(this.interval);
      this.isPaused = true;
    }

  }

  lastButNotLeast() {

    if (this.minute25 == this.minuteRest && this.second25 == this.secondRest) {
      this.colorBg = "warning";
    }

    if (this.minute5 == this.minuteRest && this.second5 == this.secondRest) {
      this.colorBg = "error";
    }


  }


  closeDial() {
    this.isReverseTimer = false;
    if (this.minuteRest != 0) {
      this.dialogRef.close(this.minuteRest);
    } else {
      this.dialogRef.close("0");
    }
    
  }


  getMinutes(val: number) {
    return parseInt("" + val / 60);
  }

  getSecond(val: number) {
    return val % 60;
  }


}
