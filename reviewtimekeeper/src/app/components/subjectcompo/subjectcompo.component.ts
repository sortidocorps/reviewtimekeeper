import { Component, OnInit, ComponentRef, ViewContainerRef } from '@angular/core';
import { Subject } from 'rxjs';


@Component({
  selector: 'app-subjectcompo',
  templateUrl: './subjectcompo.component.html',
  styleUrls: ['./subjectcompo.component.scss']
})
export class SubjectcompoComponent implements OnInit {
 

  public title:string = "";
  public who:string = "";
  public order:number = 0;
  public timeLeft:number = 60;
  public timeStarted:number;

  interval;

  isDel:boolean = false;
  time25:number;
  time5:number;

  constructor() {
   }

  ngOnInit(): void {
  }

  startTimer() {    
    this.timeStarted = this.timeLeft;
    console.log("this.timeStarted ",this.timeStarted);

    let percent = 25;
    this.time25 = Math.round(this.timeStarted*percent) / 100;
    console.log(this.time25);
    percent = 5;
    this.time5 = Math.round(this.timeStarted*percent) / 100;
    console.log(this.time5);

    this.interval = setInterval(() => {
      if(this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        this.timeLeft = 60;
      }
      this.lastButNotLeast();

    },1000)
  }

  pauseTimer() {
    clearInterval(this.interval);
  }


  deleteItem() {
    
    this.isDel = true;

  }

  isDelete(){
    return this.isDel;
  }

  lastButNotLeast() {
    
    if (this.timeLeft == this.time25) {
      console.log("YEAHHHHHHHHHH ", this.time25);
    }

    if (this.timeLeft == this.time5) {
      console.log("YEAHHHHHHHHHH5 ", this.time5);
    }


  }

  
  

}
