import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LopComponent } from './lop.component';



@NgModule({
  declarations: [LopComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: LopComponent,
      },])
    ]
})
export class LopModule { }
