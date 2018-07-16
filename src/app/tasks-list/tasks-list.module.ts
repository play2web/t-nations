import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material';
import { MatCheckboxModule } from '@angular/material/checkbox';
@NgModule({
  imports: [
    CommonModule,
    MatTableModule,
    MatCheckboxModule
  ],
  declarations: [],
  exports: [
    MatTableModule,
    MatCheckboxModule
  ],
})
export class TasksListModule { }
