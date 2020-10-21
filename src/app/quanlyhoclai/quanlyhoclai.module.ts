import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../Shared/footer/footer.component';
import { SideBarComponent } from '../Shared/side-bar/side-bar.component';
import { NavBarComponent } from '../Shared/nav-bar/nav-bar.component';

import { QuanlyhoclaiComponent } from './quanlyhoclai.component';
import { DiemComponent } from './diem/diem.component';
import { SinhvienComponent } from './sinhvien/sinhvien.component';
import { PhieuthuComponent } from './phieuthu/phieuthu.component';
export const mainRoutes: Routes = [
  {
    path: '', component: QuanlyhoclaiComponent,
      children: [
        {
          path: '', loadChildren: () => import('./lop/lop.module').then(m => m.LopModule)
      },{
        path: 'diem', component:DiemComponent
    },
    {
      path: 'sinhvien', component:SinhvienComponent
  },{
    path: 'phieuthu', component:PhieuthuComponent
},

      ]
    }
  ]

@NgModule({
  declarations: [
    FooterComponent,
    SideBarComponent,
    NavBarComponent,
    QuanlyhoclaiComponent,
    DiemComponent,
    SinhvienComponent,
    PhieuthuComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(mainRoutes),
  ],
  exports:[
    QuanlyhoclaiComponent,
  ],
  providers: [],
  bootstrap: [QuanlyhoclaiComponent]
})
export class QuanlyhoclaiModule { }
