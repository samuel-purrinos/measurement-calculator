import { Component, OnInit } from '@angular/core';
import { StorageService } from '../../services/storage.service';
import { Measurement } from '../../models/measurement';
import { Result } from '../../models/max-min-avg-measurement';
import { StoredMeasurement } from '../../models/stored.measurement.interface';

@Component({
  selector: 'app-stored-measurements',
  templateUrl: './stored-measurements.page.html',
  styleUrls: ['./stored-measurements.page.scss'],
})
export class StoredMeasurementsPage implements OnInit {
  storedMeasurements : StoredMeasurement[] = [];

  constructor(private storageService : StorageService) { 
    this.storedMeasurements = this.storageService.getData();
    if(this.storedMeasurements == null){
      this.storedMeasurements = [];
    }
  }

  ngOnInit() {
  }

}
