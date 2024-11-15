import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChemdatabaseSpillPageRoutingModule } from './chemdatabase-spill-routing.module';

import { ChemdatabaseSpillPage } from './chemdatabase-spill.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChemdatabaseSpillPageRoutingModule
  ],
  declarations: [ChemdatabaseSpillPage]
})
export class ChemdatabaseSpillPageModule {}
