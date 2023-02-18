import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MeasurementResultPageRoutingModule } from './measurement-result-routing.module';

import { MeasurementResultPage } from './measurement-result.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MeasurementResultPageRoutingModule
  ],
  declarations: [MeasurementResultPage]
})
export class MeasurementResultPageModule {}
