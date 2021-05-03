import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainAdminPage } from './main-admin.page';

const routes: Routes = [ 
  {
    path:'',
    pathMatch:'full',
    redirectTo:'d'
  },
  {
    path: '',
    component: MainAdminPage,
    children:[ 
      {
        path: 'd',
        loadChildren: () => import('../dashboard-admin/dashboard-admin.module').then( m => m.DashboardAdminPageModule)
      },
      {
        path: 'h',
        loadChildren: () => import('../history-admin/history-admin.module').then( m => m.HistoryAdminPageModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainAdminPageRoutingModule {}
