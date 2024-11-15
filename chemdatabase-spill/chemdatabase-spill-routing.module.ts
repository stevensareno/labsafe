import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChemdatabaseSpillPage } from './chemdatabase-spill.page';

const routes: Routes = [
  {
    path: '',
    component: ChemdatabaseSpillPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChemdatabaseSpillPageRoutingModule {}
