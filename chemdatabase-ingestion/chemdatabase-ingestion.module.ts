import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChemdatabaseIngestionPageRoutingModule } from './chemdatabase-ingestion-routing.module';

import { ChemdatabaseIngestionPage } from './chemdatabase-ingestion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChemdatabaseIngestionPageRoutingModule
  ],
  declarations: [ChemdatabaseIngestionPage]
})
export class ChemdatabaseIngestionPageModule {}
