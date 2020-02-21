import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule, MatFormFieldControl } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';


const material = [
    MatButtonModule,
    MatToolbarModule,
    MatTableModule,
    MatInputModule,
    MatPaginatorModule,
    MatGridListModule,
    MatCheckboxModule,
    MatIconModule,
    MatDialogModule,
    MatSnackBarModule,
    MatSortModule,
    MatTooltipModule,
    MatSelectModule,
    MatFormFieldModule,
    MatCardModule,
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    material,
  ],
  exports: [
    material
  ]
})
export class MaterialModule { }
