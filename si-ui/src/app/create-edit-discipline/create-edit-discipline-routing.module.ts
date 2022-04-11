import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateEditDisciplinePage } from './create-edit-discipline.page';

const routes: Routes = [
  {
    path: '',
    component: CreateEditDisciplinePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateEditDisciplinePageRoutingModule {}
