import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PhieuthuComponent } from './phieuthu.component';




@NgModule({
  declarations: [PhieuthuComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: PhieuthuComponent,
      },])
    ]
})
export class PhieuthuModule { }
