import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MeasurementPageRoutingModule } from './measurement-routing.module';

import { MeasurementPage } from './measurement.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MeasurementPageRoutingModule,
    TranslateModule.forChild()
  ],
  declarations: [MeasurementPage]
})
export class MeasurementPageModule {}
