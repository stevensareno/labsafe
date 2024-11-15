import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChemdatabaseFiremanagementPageRoutingModule } from './chemdatabase-firemanagement-routing.module';

import { ChemdatabaseFiremanagementPage } from './chemdatabase-firemanagement.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChemdatabaseFiremanagementPageRoutingModule
  ],
  declarations: [ChemdatabaseFiremanagementPage]
})
export class ChemdatabaseFiremanagementPageModule {}
