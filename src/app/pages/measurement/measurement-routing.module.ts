import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MeasurementPage } from './measurement.page';

const routes: Routes = [
  {
    path: '',
    component: MeasurementPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MeasurementPageRoutingModule {}
