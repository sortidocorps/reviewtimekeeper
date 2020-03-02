import { Component, OnInit, ComponentRef, ViewContainerRef } from '@angular/core';
import { Subject } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { SubjectDisplayComponent } from '../subject-display/subject-display.component';


@Component({
  selector: 'app-subjectcompo',
  templateUrl: './subjectcompo.component.html',
  styleUrls: ['./subjectcompo.component.scss']
})
export class SubjectcompoComponent implements OnInit {


  public title: string = "";
  public who: string = "";
  public order: number = 0;
  public timeLeft: number = 60;
  public timeStarted: number;

  public colorForms:string;

  interval;

  isDel: boolean = false;
  istOk: boolean = false;
  time25: number;
  time5: number;

  constructor(public dialog: MatDialog) {
  }

  ngOnInit(): void {
  }

  startTimer() {

    const dial = this.dialog.open(SubjectDisplayComponent, {
      position: {
        top: '25px',
        /* right: '10px' */
      },
      disableClose: true,
      height: '100vw',
      width: '100vw',
      panelClass: 'myapp-no-padding-dialog',
      data: {
        title: this.title,
        who: this.who,
        timeLeft: this.timeLeft
      }
    });

    dial.afterClosed().subscribe(result => {
      if(result == "ok") {
        this.colorForms = "good";
      } else {
        this.colorForms = "warning";
      }
    });

  }


  deleteItem() {

    this.isDel = true;

  }

  isDelete() {
    return this.isDel;
  }




}
