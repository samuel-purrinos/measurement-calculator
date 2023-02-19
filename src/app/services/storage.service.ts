import { Injectable } from '@angular/core';
import { Result } from '../models/max-min-avg-measurement';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  public storedMeasurements : Result[] = [];

  constructor() { }

  initialize() {
    let storedMeasurements = window.localStorage.getItem('storedMeasurements');
    if (storedMeasurements) {
      this.storedMeasurements = JSON.parse(storedMeasurements);
    }
  }

  add(measurement: Result) {
    this.storedMeasurements.push(measurement);
    window.localStorage.setItem('storedMeasurements', JSON.stringify(this.storedMeasurements));
  }

  remove(measurement: Result) {
    let removeIndex : number = this.storedMeasurements.findIndex((item) => {
      return item.id === measurement.id;
    }
    );
    if (removeIndex !== -1) {
      this.storedMeasurements.splice(removeIndex, 1);
      window.localStorage.setItem('storedMeasurements', JSON.stringify(this.storedMeasurements));
    }
  }

}
