import { Injectable } from '@angular/core';
import { Result } from '../models/max-min-avg-measurement';
import { StoredMeasurement } from '../models/stored.measurement.interface';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  public storedMeasurements : StoredMeasurement[];

  private dataKey = 'storedMeasurements';

  constructor() { 
    this.storedMeasurements = this.getData();
  }

  getData(): StoredMeasurement[] {
    const dataString = localStorage.getItem(this.dataKey);
    return dataString ? JSON.parse(dataString) : [];
  }

  setData(data: StoredMeasurement): void {
    data.id = this.storedMeasurements.length + 1;
    this.storedMeasurements.push(data);
    const dataString = JSON.stringify(this.storedMeasurements);
    localStorage.setItem(this.dataKey, dataString);
  }

  getDataById(id: number): StoredMeasurement {
    for (const storedData of this.storedMeasurements) {
      if (storedData.id === id) {
        return storedData;
      }
    }
    return {} as StoredMeasurement;
  }

}
