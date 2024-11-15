import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChemdatabaseSkincontactPageRoutingModule } from './chemdatabase-skincontact-routing.module';

import { ChemdatabaseSkincontactPage } from './chemdatabase-skincontact.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChemdatabaseSkincontactPageRoutingModule
  ],
  declarations: [ChemdatabaseSkincontactPage]
})
export class ChemdatabaseSkincontactPageModule {}
