import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ChemdatabaseEyePageRoutingModule } from './chemdatabase-eye-routing.module'; // Include if you have routing
import { ChemdatabaseEyePage } from './chemdatabase-eye.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChemdatabaseEyePageRoutingModule // Include this if you have routing set up
  ],
  declarations: [ChemdatabaseEyePage]
})
export class ChemdatabaseEyePageModule {}
