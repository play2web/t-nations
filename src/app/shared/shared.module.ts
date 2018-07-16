import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule, MatChipsModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    MatChipsModule
  ],
  declarations: [],
  exports: [
    MatToolbarModule,
    MatChipsModule
  ],
})
export class SharedModule { }
