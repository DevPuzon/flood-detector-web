import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardBarangayPage } from './dashboard-barangay.page';

const routes: Routes = [
  {
    path: '',
    component: DashboardBarangayPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardBarangayPageRoutingModule {}
