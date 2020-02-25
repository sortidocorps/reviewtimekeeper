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

  constructor() {
   }

  ngOnInit(): void {
  }

  startTimer() {    
    this.timeStarted = this.timeLeft;
    console.log("this.timeStarted ",this.timeStarted);
    this.interval = setInterval(() => {
      if(this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        this.timeLeft = 60;
      }
      this.lastButNotLeast(25);
      this.lastButNotLeast(5);

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

  lastButNotLeast(percent: number) {
    
    let time25 = Math.round(this.timeStarted*percent) / 100;
    console.log(time25);
    if (this.timeLeft == time25) {
      console.log("YEAHHHHHHHHHH ", time25);
    }


  }

  
  

}
