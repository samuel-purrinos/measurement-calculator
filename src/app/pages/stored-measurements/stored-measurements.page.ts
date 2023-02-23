import { Component, OnInit } from '@angular/core';
import { StorageService } from '../../services/storage.service';
import { Measurement } from '../../models/measurement';
import { Result } from '../../models/max-min-avg-measurement';

@Component({
  selector: 'app-stored-measurements',
  templateUrl: './stored-measurements.page.html',
  styleUrls: ['./stored-measurements.page.scss'],
})
export class StoredMeasurementsPage implements OnInit {
  measurements : Result[] = [];

  constructor(private storageService : StorageService) { }

  ngOnInit() {
  }

}
