import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MeasurementPageRoutingModule } from './measurement-routing.module';

import { MeasurementPage } from './measurement.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MeasurementPageRoutingModule
  ],
  declarations: [MeasurementPage]
})
export class MeasurementPageModule {}
