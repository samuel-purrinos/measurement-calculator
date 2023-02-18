import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StoredMeasurementsPage } from './stored-measurements.page';

const routes: Routes = [
  {
    path: '',
    component: StoredMeasurementsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StoredMeasurementsPageRoutingModule {}
