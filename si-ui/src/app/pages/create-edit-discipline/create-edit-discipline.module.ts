import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateEditDisciplinePageRoutingModule } from './create-edit-discipline-routing.module';

import { CreateEditDisciplinePage } from './create-edit-discipline.page';
import { SharedModule } from '../../shared/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    CreateEditDisciplinePageRoutingModule
  ],
  declarations: [CreateEditDisciplinePage]
})
export class CreateEditDisciplinePageModule {}
