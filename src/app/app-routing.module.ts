import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'measurement',
    pathMatch: 'full'
  },
  {
    path: 'calculate',
    loadChildren: () => import('./pages/calculate/calculate.module').then( m => m.CalculatePageModule)
  },
  {
    path: 'measurement',
    loadChildren: () => import('./pages/measurement/measurement.module').then( m => m.MeasurementPageModule)
  },
  {
    path: 'measurement-result',
    loadChildren: () => import('./pages/measurement-result/measurement-result.module').then( m => m.MeasurementResultPageModule)
  },
  {
    path: 'stored-measurements',
    loadChildren: () => import('./pages/stored-measurements/stored-measurements.module').then( m => m.StoredMeasurementsPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
