import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChemdatabaseSkincontactPage } from './chemdatabase-skincontact.page';

const routes: Routes = [
  {
    path: '',
    component: ChemdatabaseSkincontactPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChemdatabaseSkincontactPageRoutingModule {}
