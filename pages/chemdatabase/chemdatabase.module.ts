import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChemdatabasePageRoutingModule } from './chemdatabase-routing.module';

import { ChemdatabasePage } from './chemdatabase.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChemdatabasePageRoutingModule
  ],
  declarations: [ChemdatabasePage]
})
export class ChemdatabasePageModule {}
