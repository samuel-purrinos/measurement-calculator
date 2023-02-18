import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StoredMeasurementsPageRoutingModule } from './stored-measurements-routing.module';

import { StoredMeasurementsPage } from './stored-measurements.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StoredMeasurementsPageRoutingModule
  ],
  declarations: [StoredMeasurementsPage]
})
export class StoredMeasurementsPageModule {}
