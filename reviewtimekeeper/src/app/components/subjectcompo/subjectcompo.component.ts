import { ReviewSubject } from './../../entities/reviewSubject';
import { Component, OnInit, ComponentRef, ViewContainerRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SubjectDisplayComponent } from '../subject-display/subject-display.component';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-subjectcompo',
  templateUrl: './subjectcompo.component.html',
  styleUrls: ['./subjectcompo.component.scss']
})
export class SubjectcompoComponent implements OnInit {

  public subject: ReviewSubject[] = [];
  dataSource: MatTableDataSource<ReviewSubject>;
  reviewSubject: ReviewSubject = new ReviewSubject();

  displayColumns: string[] = [
    'title',
    'who',
    'time',
    'create',
    'delete'
  ];

  public timeMinute: number;

  public colorForms: string;
  theRestTimeNotCusome: string;


  interval;

  istOk: boolean = false;
  time25: number;
  time5: number;

  constructor(
    public dialog: MatDialog
  ) {
  }

  ngOnInit(): void {
    // creation
    this.reviewSubject = {
      order: 1,
      title: "",
      who:"",
      time:0
    };
    this.subject.push(this.reviewSubject);

    this.dataSource = new MatTableDataSource(this.subject);
  }

  startTimer(row: ReviewSubject) {

    const dial = this.dialog.open(SubjectDisplayComponent, {
      position: {
        top: '25px',
        /* right: '10px' */
      },
      disableClose: true,
      maxWidth: '100vw',
      height: '100%',
      width: '100%',
      panelClass: 'myapp-no-padding-dialog',
      data: this.subject[this.subject.indexOf(row)]
    });
    dial.afterClosed().subscribe(result => {
      console.log("result", result);
      if (result == "ok") {

        this.colorForms = "good";
      } else {
        this.theRestTimeNotCusome = result;
        this.colorForms = "warning";
      }
    });
  }

  addSubject() {
    let newSubject = new ReviewSubject();
    // newSubject.title = '';
    // newSubject.who = '';
    // newSubject.time = 0;
    this.subject.push(newSubject);
    this.dataSource.data = this.subject;
  }

  deleteItem(i:number) {
    this.subject.splice(i, 1);
    this.dataSource.data = this.subject;
  }

}
