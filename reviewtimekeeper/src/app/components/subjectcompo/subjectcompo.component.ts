import { Component, OnInit, ComponentRef, ViewContainerRef } from '@angular/core';

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

  interval;
  public containTarget: ViewContainerRef;

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

  deleteItem() {
    
    this.containTarget.remove();

  }

  
  

}
