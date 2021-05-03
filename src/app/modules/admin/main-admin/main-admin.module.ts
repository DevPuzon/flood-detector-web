import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MainAdminPageRoutingModule } from './main-admin-routing.module';

import { MainAdminPage } from './main-admin.page';
import { SharedPipeModuleModule } from 'src/app/shared/modules/shared-pipe-module/shared-pipe-module.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MainAdminPageRoutingModule,
    SharedPipeModuleModule 
  ],
  declarations: [MainAdminPage]
})
export class MainAdminPageModule {}
