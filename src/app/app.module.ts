import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MeasurementPage } from './pages/measurement/measurement.page';
import { MeasurementReportComponent } from './pages/measurement-report/measurement-report.component';
import { MeasurementResultPage } from './pages/measurement-result/measurement-result.page';
import { CalculatePage } from './pages/calculate/calculate.page';
import { StoredMeasurementsPage } from './pages/stored-measurements/stored-measurements.page';

@NgModule({
  declarations: [
    AppComponent,
    MeasurementPage,
    MeasurementReportComponent,
    MeasurementResultPage,
    CalculatePage,
    StoredMeasurementsPage,
  ],
  imports: [BrowserModule,
     IonicModule.forRoot(), 
     AppRoutingModule,ReactiveFormsModule,
     HttpClientModule,
    TranslateModule.forRoot({
      defaultLanguage: 'en',
    loader: {
      provide: TranslateLoader,
      useFactory: (createTranslateLoader),
      deps: [HttpClient]
    }
  }),],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
  
})
export class AppModule {}

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
