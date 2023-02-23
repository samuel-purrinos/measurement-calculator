import { HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { createTranslateLoader } from 'src/app/app.module';

import { CalculatePage } from './calculate.page';

const routes: Routes = [
  {
    path: '',
    component: CalculatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes),    
    TranslateModule.forChild()],
  exports: [RouterModule],
})
export class CalculatePageRoutingModule {}
