import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MeasurementResultPage } from './measurement-result.page';

const routes: Routes = [
  {
    path: '',
    component: MeasurementResultPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MeasurementResultPageRoutingModule {}
