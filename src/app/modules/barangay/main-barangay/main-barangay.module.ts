import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MainBarangayPageRoutingModule } from './main-barangay-routing.module';

import { MainBarangayPage } from './main-barangay.page';
import { SharedPipeModuleModule } from 'src/app/shared/modules/shared-pipe-module/shared-pipe-module.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MainBarangayPageRoutingModule,
    SharedPipeModuleModule.forRoot()
  ],
  declarations: [MainBarangayPage]
})
export class MainBarangayPageModule {}
