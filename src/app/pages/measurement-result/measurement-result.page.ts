import { Component, OnInit } from '@angular/core';
import { StorageService } from '../../services/storage.service';
import { Measurement } from '../../models/measurement';
import { ActivatedRoute } from '@angular/router';
import { Result } from 'src/app/models/max-min-avg-measurement';

@Component({
  selector: 'app-measurement-result',
  templateUrl: './measurement-result.page.html',
  styleUrls: ['./measurement-result.page.scss'],
})
export class MeasurementResultPage implements OnInit {
  measurement : Result;
  activatedRoute: ActivatedRoute;

  constructor(private storageService : StorageService,activatedRoute: ActivatedRoute) {
    this.activatedRoute = activatedRoute;
    let measurement :Result;
    this.loadMeasurement().then((measurement) => {
      measurement = measurement!;
    });
    this.measurement = measurement!;
    
  }
  

  ngOnInit() {
  }

  async loadMeasurement() {
    if(this.storageService.storedMeasurements!==undefined){}
    let measurement = await this.storageService.storedMeasurements.find((item) => {
      return item.id === this.activatedRoute.snapshot.params['id'];
    }
    );
    return measurement;
  }

}
