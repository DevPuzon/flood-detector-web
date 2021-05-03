import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HistoryAdminPageRoutingModule } from './history-admin-routing.module';

import { HistoryAdminPage } from './history-admin.page';
import { SharedPipeModuleModule } from 'src/app/shared/modules/shared-pipe-module/shared-pipe-module.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HistoryAdminPageRoutingModule,
    SharedPipeModuleModule.forRoot()
  ],
  declarations: [HistoryAdminPage]
})
export class HistoryAdminPageModule {}
