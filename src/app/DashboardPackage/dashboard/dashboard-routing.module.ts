import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HistoryComponent } from 'src/app/history/history.component';
import { DashboardMainComponent } from '../dashboard-main/dashboard-main.component';

import { DashboardPage } from './dashboard.page';

const routes: Routes = [
  {
    path:'',
    pathMatch:'full',
    redirectTo:'d'
  },
  {
    path: '',
    component: DashboardPage,
    children:[
      {
        path:'d',
        component:DashboardMainComponent
      },
      {
        path:'h',
        component:HistoryComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardPageRoutingModule {}
