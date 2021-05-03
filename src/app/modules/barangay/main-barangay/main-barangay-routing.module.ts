import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainBarangayPage } from './main-barangay.page';

const routes: Routes = [
  {
    path:'',
    pathMatch:'full',
    redirectTo:'d'
  },
  {
    path: '',
    component: MainBarangayPage,
    children:[ 
      {
        path: 'd',
        loadChildren: () => import('../dashboard-barangay/dashboard-barangay.module').then( m => m.DashboardBarangayPageModule)
      },
      {
        path: 'h',
        loadChildren: () => import('../history-barangay/history-barangay.module').then( m => m.HistoryBarangayPageModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainBarangayPageRoutingModule {}
