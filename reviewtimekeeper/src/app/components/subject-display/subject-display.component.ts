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
  interval;
  timeStarted: number;
  timeLeft: number;
  colorBg: string;
  isPaused: boolean;

  secondRest:number;
  minuteRest:number;

  constructor(public dialogRef: MatDialogRef<SubjectcompoComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {
    this.timeLeft = this.data.timeLeft;
    this.isPaused = false;
  }



  ngOnInit(): void {
    this.startTimer();
    this.colorBg = "good";

    this.timeStarted = this.timeLeft;

    let percent = 25;
    this.time25 = parseInt("" + Math.round(this.timeStarted * percent) / 100);

    percent = 5;
    this.time5 = parseInt("" + Math.round(this.timeStarted * percent) / 100);

    console.log("time25 ", this.time25);
    console.log("time5 ", this.time5);

    this.minuteRest = parseInt("" +this.timeStarted / 60);
    this.secondRest = this.timeStarted % 60;
    console.log("time minute ", this.minuteRest);
    console.log("time second ", this.secondRest); 
  }
  
  startTimer() {
    this.isPaused = false;
    this.interval = setInterval(() => {
      if (this.secondRest > 0) {
        this.secondRest--;
      } else if(this.minuteRest > 0 && this.secondRest == 0) {
        this.minuteRest--;
        let secondTotal = this.minuteRest * 60;
        secondTotal = + 59;
        //this.minuteRest = parseInt("" +secondTotal / 60);
        this.secondRest = secondTotal % 60;  
        console.log("time  ", secondTotal, this.minuteRest, this.secondRest); 
       // this.minuteRest--;
      } else {
        clearInterval(this.interval);
        this.closerPopup();
      }
      this.lastButNotLeast();

    }, 1000)

  }

  /* startTimer() {
    this.isPaused = false;
    this.interval = setInterval(() => {
      if (this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        clearInterval(this.interval);
        this.closerPopup();
      }
      this.lastButNotLeast();

    }, 1000)

  } */

  closerPopup() {
    if (this.timeLeft <= 0) {

      // Close the popup 2 seconds after the end of the subject
      let timeToClosePopup = 2;
      let closePopupInterval = setInterval(() => {
        if (timeToClosePopup > 0) {
          timeToClosePopup--;
        } else {
          clearInterval(closePopupInterval);
        }
        // The time is realy finish.
        this.dialogRef.close("ok");

      }, 1000)

    }
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

    if (this.timeLeft == this.time25) {
      this.colorBg = "warning";
    }

    if (this.timeLeft == this.time5) {
      this.colorBg = "error";
    }


  }


  closeDial() {
    this.dialogRef.close("");
  }
  

}
