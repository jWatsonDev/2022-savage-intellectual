import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DisciplineManagementPage } from './discipline-management.page';

const routes: Routes = [
  {
    path: '',
    component: DisciplineManagementPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DisciplineManagementPageRoutingModule {}
