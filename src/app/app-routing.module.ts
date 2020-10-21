import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'admin',loadChildren: () => import('./quanlyhoclai/quanlyhoclai.module').then((m) => m.QuanlyhoclaiModule)
  },
];

@NgModule({
  imports: [ CommonModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
