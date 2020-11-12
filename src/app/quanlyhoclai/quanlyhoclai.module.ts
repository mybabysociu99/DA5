import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../Shared/footer/footer.component';
import { SideBarComponent } from '../Shared/side-bar/side-bar.component';
import { NavBarComponent } from '../Shared/nav-bar/nav-bar.component';
import { QuanlyhoclaiComponent } from './quanlyhoclai.component';




export const mainRoutes: Routes = [
  {
    path: '', component: QuanlyhoclaiComponent,
      children: [
        {
          path: '', loadChildren: () => import('./lop/lop.module').then(m => m.LopModule)
      },{
        path: 'diem',  loadChildren: () => import('./diem/diem.module').then(m => m.DiemModule)
    },
    {
      path: 'sinhvien',  loadChildren: () => import('./sinhvien/sinhvien.module').then(m => m.SinhvienModule)
  },
  {
    path: 'phieuthu',  loadChildren: () => import('./phieuthu/phieuthu.module').then(m => m.PhieuthuModule)
  },
  {
    path: 'login',  loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
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
