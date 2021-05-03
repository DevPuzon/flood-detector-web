import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HistoryBarangayPageRoutingModule } from './history-barangay-routing.module';

import { HistoryBarangayPage } from './history-barangay.page';
import { SharedPipeModuleModule } from 'src/app/shared/modules/shared-pipe-module/shared-pipe-module.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HistoryBarangayPageRoutingModule,
    SharedPipeModuleModule.forRoot()
  ],
  declarations: [HistoryBarangayPage]
})
export class HistoryBarangayPageModule {}
