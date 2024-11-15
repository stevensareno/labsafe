import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChemdatabaseEyePage } from './chemdatabase-eye.page';

const routes: Routes = [
  {
    path: '',
    component: ChemdatabaseEyePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChemdatabaseEyePageRoutingModule {}
