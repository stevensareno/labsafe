import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChemdatabasePage } from './chemdatabase.page';

const routes: Routes = [
  {
    path: '',
    component: ChemdatabasePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChemdatabasePageRoutingModule {}
