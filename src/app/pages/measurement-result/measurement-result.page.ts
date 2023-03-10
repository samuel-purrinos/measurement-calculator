import { Component, OnInit } from '@angular/core';
import { StorageService } from '../../services/storage.service';
import { Measurement } from '../../models/measurement';
import { ActivatedRoute } from '@angular/router';
import { Result } from 'src/app/models/max-min-avg-measurement';
import { CalculateService } from '../../services/calculate.service';
import { AlertController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { StoredMeasurement } from 'src/app/models/stored.measurement.interface';

@Component({
  selector: 'app-measurement-result',
  templateUrl: './measurement-result.page.html',
  styleUrls: ['./measurement-result.page.scss'],
})
export class MeasurementResultPage implements OnInit {
  measurements : Measurement[] = [];
  currentResult : Result;
  dataToPersist : StoredMeasurement;

  constructor(private calculateService : CalculateService,private alertController: AlertController,
    private translateService: TranslateService, private storageService : StorageService, private route: ActivatedRoute) {
    this.measurements = this.calculateService.finishedMeasurements;
    this.currentResult = this.calculateService.result;
    this.dataToPersist = {
      id: 0,
      name: '',
      result: this.calculateService.result,
      measurements: this.calculateService.finishedMeasurements
    };

  }

  async openDialog() {
    const alert = await this.alertController.create({
      header: this.translateService.instant('result.report.save_title'),
      inputs: [
        {
          name: 'resultName',
          type: 'text',
          placeholder: 'Nombre'
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel'
        },
        {
          text: this.translateService.instant('result.report.save'),
          handler: (data) => {
            console.log('Nombre ingresado:', data.nombre);
            this.dataToPersist.name = data.resultName;
            this.storageService.setData(this.dataToPersist);
          }
        }
      ]
    });

    await alert.present();
  }


  ngOnInit() {
  }

}
