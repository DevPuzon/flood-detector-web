import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DashboardBarangayPageRoutingModule } from './dashboard-barangay-routing.module';

import { DashboardBarangayPage } from './dashboard-barangay.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DashboardBarangayPageRoutingModule
  ],
  declarations: [DashboardBarangayPage]
})
export class DashboardBarangayPageModule {}
