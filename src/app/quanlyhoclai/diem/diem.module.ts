import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DiemComponent } from './diem.component';




@NgModule({
  declarations: [DiemComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: DiemComponent,
      },])
    ]
})
export class DiemModule { }