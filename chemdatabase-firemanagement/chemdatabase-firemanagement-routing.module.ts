import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChemdatabaseFiremanagementPage } from './chemdatabase-firemanagement.page';

const routes: Routes = [
  {
    path: '',
    component: ChemdatabaseFiremanagementPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChemdatabaseFiremanagementPageRoutingModule {}
