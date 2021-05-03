import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HistoryBarangayPage } from './history-barangay.page';

const routes: Routes = [
  {
    path: '',
    component: HistoryBarangayPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HistoryBarangayPageRoutingModule {}
