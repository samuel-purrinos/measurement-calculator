import { Injectable } from '@angular/core';
import { Result } from '../models/max-min-avg-measurement';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  public storedMeasurements : Result[];

  private dataKey = 'storedMeasurements';

  constructor() { 
    this.storedMeasurements = this.getData();
  }

  getData(): Result[] {
    const dataString = localStorage.getItem(this.dataKey);
    return dataString ? JSON.parse(dataString) : [];
  }

  setData(data: Result): void {
    data.id = this.storedMeasurements.length + 1;
    this.storedMeasurements.push(data);
    const dataString = JSON.stringify(this.storedMeasurements);
    localStorage.setItem(this.dataKey, dataString);
  }

}
