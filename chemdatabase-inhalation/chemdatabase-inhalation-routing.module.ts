import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChemdatabaseInhalationPage } from './chemdatabase-inhalation.page';

const routes: Routes = [
  {
    path: '',
    component: ChemdatabaseInhalationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChemdatabaseInhalationPageRoutingModule {}
