import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { CalculatePage } from './pages/calculate/calculate.page';
import { MeasurementReportComponent } from './pages/measurement-report/measurement-report.component';
import { MeasurementResultPage } from './pages/measurement-result/measurement-result.page';
import { StoredMeasurementsPage } from './pages/stored-measurements/stored-measurements.page';
import { MeasurementPage } from './pages/measurement/measurement.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'measurement',
    pathMatch: 'full'
  },
  {
    path: 'calculate',
    component: CalculatePage
  },
  {
    path: 'measurement',
    component : MeasurementPage
  },
  {
    path: 'measurement-result',
    component : MeasurementResultPage
  },
  {
    path: 'stored-measurements',
    component : StoredMeasurementsPage
  },
  {
    path: 'measurement-report/:id',
    component : MeasurementReportComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
