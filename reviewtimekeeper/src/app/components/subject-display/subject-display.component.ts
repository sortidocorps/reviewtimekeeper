import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SubjectcompoComponent } from '../subjectcompo/subjectcompo.component';

@Component({
  selector: 'app-subject-display',
  templateUrl: './subject-display.component.html',
  styleUrls: ['./subject-display.component.scss']
})
export class SubjectDisplayComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<SubjectcompoComponent>,@Inject(MAT_DIALOG_DATA) public data: any) { }



  ngOnInit(): void {
  }

}
