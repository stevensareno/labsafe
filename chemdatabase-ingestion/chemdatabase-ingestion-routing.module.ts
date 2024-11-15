import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChemdatabaseIngestionPage } from './chemdatabase-ingestion.page';

const routes: Routes = [
  {
    path: '',
    component: ChemdatabaseIngestionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChemdatabaseIngestionPageRoutingModule {}
