import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Measurement } from 'src/app/models/measurement';
import { StorageService } from '../../services/storage.service';
import { StoredMeasurement } from '../../models/stored.measurement.interface';

@Component({
  selector: 'app-measurement-report',
  templateUrl: './measurement-report.component.html',
  styleUrls: ['./measurement-report.component.scss'],
})
export class MeasurementReportComponent implements OnInit {

  storedMeasurement : StoredMeasurement = {} as StoredMeasurement;

  constructor(private storageService : StorageService,private route: ActivatedRoute) {
      const id = parseInt(this.route.snapshot.paramMap.get('id')!);
      this.storedMeasurement = this.storageService.getDataById(id);
      console.log(this.storedMeasurement);

  }

  generateReport() {
    console.log(this.storedMeasurement);
  }
  

  ngOnInit() {}

}
