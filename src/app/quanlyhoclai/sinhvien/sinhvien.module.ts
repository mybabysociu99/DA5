import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SinhvienComponent } from './sinhvien.component';



@NgModule({
  declarations: [SinhvienComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: SinhvienComponent,
      },])
    ]
})
export class SinhvienModule { }