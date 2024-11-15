import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChemdatabaseInhalationPageRoutingModule } from './chemdatabase-inhalation-routing.module';

import { ChemdatabaseInhalationPage } from './chemdatabase-inhalation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChemdatabaseInhalationPageRoutingModule
  ],
  declarations: [ChemdatabaseInhalationPage]
})
export class ChemdatabaseInhalationPageModule {}
