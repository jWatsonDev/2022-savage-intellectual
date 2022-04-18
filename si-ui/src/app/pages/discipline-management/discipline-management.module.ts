import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DisciplineManagementPageRoutingModule } from './discipline-management-routing.module';

import { DisciplineManagementPage } from './discipline-management.page';
import { SharedModule } from 'src/app/shared/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    DisciplineManagementPageRoutingModule
  ],
  declarations: [DisciplineManagementPage]
})
export class DisciplineManagementPageModule {}
