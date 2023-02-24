import { Component, OnInit } from '@angular/core';
import { StorageService } from '../../services/storage.service';
import { Measurement } from '../../models/measurement';
import { ActivatedRoute } from '@angular/router';
import { Result } from 'src/app/models/max-min-avg-measurement';
import { CalculateService } from '../../services/calculate.service';

@Component({
  selector: 'app-measurement-result',
  templateUrl: './measurement-result.page.html',
  styleUrls: ['./measurement-result.page.scss'],
})
export class MeasurementResultPage implements OnInit {
  measurements : Measurement[] = [];
  currentResult : Result;

  constructor(private calculateService : CalculateService) {
    this.measurements = this.calculateService.finishedMeasurements;
    this.currentResult = this.calculateService.result;

  }

  ngOnInit() {
  }

}
